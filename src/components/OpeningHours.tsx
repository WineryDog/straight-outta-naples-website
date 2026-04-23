import { useState, useEffect } from 'react';

// Tipizzazione per gli slot orari (espressi in minuti dalla mezzanotte per calcoli facili)
interface TimeSlot {
  start: number;
  end: number;
}

interface DaySchedule {
  label: string;
  slots: TimeSlot[];
  display: string;
}

// Struttura dei dati degli orari (L'indice è il getDay() di JS: 0 = Domenica, 1 = Lunedì, ecc.)
const SCHEDULE: Record<number, DaySchedule> = {
  1: { label: 'MON', slots: [], display: 'Closed' },
  2: { label: 'TUE', slots: [{ start: 17 * 60, end: 21 * 60 + 30 }], display: '5:00 PM – 9:30 PM' },
  3: { label: 'WED', slots: [{ start: 17 * 60, end: 21 * 60 + 30 }], display: '5:00 PM – 9:30 PM' },
  4: { label: 'THU', slots: [{ start: 17 * 60, end: 21 * 60 + 30 }], display: '5:00 PM – 9:30 PM' },
  5: { label: 'FRI', slots: [{ start: 17 * 60, end: 22 * 60 }], display: '5:00 PM – 10:00 PM' },
  6: { label: 'SAT', slots: [{ start: 17 * 60, end: 22 * 60 }], display: '5:00 PM – 10:00 PM' },
  0: { 
    label: 'SUN', 
    slots: [
      { start: 12 * 60, end: 15 * 60 }, 
      { start: 17 * 60, end: 21 * 60 + 30 }
    ], 
    display: '12:00 PM – 3:00 PM, 5:00 PM – 9:30 PM' 
  }
};

// Ordine di visualizzazione dal Lunedì (1) alla Domenica (0)
const DISPLAY_ORDER: number[] = [1, 2, 3, 4, 5, 6, 0];

export function OpeningHours() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentMelbDay, setCurrentMelbDay] = useState<number | null>(null);

  useEffect(() => {
    const checkStatus = () => {
      // Ottieni l'orario corrente specifico per Melbourne
      const now = new Date();
      const melbDateString = now.toLocaleString('en-US', { timeZone: 'Australia/Melbourne' });
      const melbDate = new Date(melbDateString);

      const day = melbDate.getDay();
      const hours = melbDate.getHours();
      const minutes = melbDate.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      setCurrentMelbDay(day);

      // Controlla se l'orario attuale rientra negli slot del giorno corrente
      const todaySchedule = SCHEDULE[day];
      const isCurrentlyOpen = todaySchedule.slots.some(
        (slot) => currentMinutes >= slot.start && currentMinutes < slot.end
      );

      setIsOpen(isCurrentlyOpen);
    };

    // Esegui subito e poi aggiorna ogni minuto
    checkStatus();
    const interval = setInterval(checkStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Status Indicator */}
      <div className="flex items-center gap-2 mb-6">
        <span className="relative flex h-3 w-3">
          {isOpen && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          )}
          <span 
            className={`relative inline-flex rounded-full h-3 w-3 ${
              isOpen ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></span>
        </span>
        <span className="font-sans font-semibold text-sm text-stone-800 uppercase tracking-wide">
          {isOpen ? 'Open Now' : 'Closed'}
        </span>
      </div>

      {/* Hours List */}
      <div className="flex flex-col gap-3 font-sans text-stone-600">
        {DISPLAY_ORDER.map((dayIndex) => {
          const isToday = currentMelbDay === dayIndex;
          const { label, display } = SCHEDULE[dayIndex];

          return (
            <div 
              key={dayIndex}
              className={`flex justify-between items-center py-1.5 px-3 rounded-md transition-colors ${
                isToday ? 'bg-stone-200/60 font-medium text-stone-900 shadow-sm' : ''
              }`}
            >
              <span className="w-12 text-left">{label}</span>
              <span className="text-right">{display}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}