const { useState, useEffect, useMemo } = React;

function AppController() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("2026-04-16");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadedEvents = EventModel.load(initialData);
    setEvents(loadedEvents);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      EventModel.save(events);
    }
  }, [events, isLoaded]);

  const dailyEvents = useMemo(() => {
    return EventModel.getDailyEvents(events, selectedDate);
  }, [events, selectedDate]);

  const progress = useMemo(() => {
    return EventModel.calculateProgress(dailyEvents);
  }, [dailyEvents]);

  const handleReset = () => {
    const confirmed = window.confirm(
      "¿Estás seguro de que deseas reiniciar todo el evento? Se borrarán las tareas completadas y nuevas tareas añadidas."
    );

    if (!confirmed) return;

    EventModel.reset();
    setEvents(initialData);
    setSelectedDate("2026-04-16");
  };

  const handleToggleSubtask = (eventId, subtaskId) => {
    setEvents(prevEvents => EventModel.toggleSubtask(prevEvents, eventId, subtaskId));
  };

  const handleAddEvent = (newEvent) => {
    setEvents(prevEvents => EventModel.addEvent(prevEvents, newEvent));
    setIsModalOpen(false);
  };

  if (!isLoaded) {
    return <div className="loading-screen">Cargando...</div>;
  }

  return (
    <div className="min-h-screen pb-24 md:max-w-2xl mx-auto md:border-x md:border-gray-200 md:shadow-lg bg-gray-50 relative">
      <header className="sticky top-0 z-10 glass-header border-b border-gray-200">
        <div className="px-5 pt-6 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Cronograma del Evento</h1>
              <p className="text-sm text-gray-500 mt-1">Sigue el minuto a minuto del equipo</p>
            </div>

            <button
              onClick={handleReset}
              title="Restaurar y limpiar datos"
              className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0 border border-transparent hover:border-red-100"
            >
              <IconRefresh />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 bg-gray-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-brand-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-xs font-semibold text-brand-600 w-8">{progress}%</span>
          </div>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar px-3 pb-2 gap-2">
          {days.map(day => (
            <button
              key={day.id}
              onClick={() => setSelectedDate(day.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                ${selectedDate === day.id
                  ? 'bg-brand-900 text-white shadow-md transform scale-100'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}
              `}
            >
              <div className="text-xs opacity-80 font-normal">{day.dateStr}</div>
              <div>{day.label}</div>
            </button>
          ))}
        </div>
      </header>

      <main className="p-4 sm:p-5">
        {dailyEvents.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">No hay actividades programadas para este día.</div>
            <button onClick={() => setIsModalOpen(true)} className="text-brand-600 font-semibold text-sm">
              Añadir la primera actividad
            </button>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 hidden sm:block"></div>

            <div className="space-y-4">
              {dailyEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  onToggleSubtask={handleToggleSubtask}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 md:absolute md:bottom-8 md:-right-8 bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-full shadow-xl shadow-brand-500/30 transition-transform active:scale-95 flex items-center justify-center z-20"
        aria-label="Añadir evento"
      >
        <IconPlus />
      </button>

      {isModalOpen && (
        <AddEventModal
          selectedDate={selectedDate}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddEvent}
        />
      )}
    </div>
  );
}