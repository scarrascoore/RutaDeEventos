const { useState } = React;

// Íconos
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const IconClose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconChevronDown = ({ expanded }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const IconList = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const IconRefresh = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

// Tarjeta de evento
function EventCard({ event, onToggleSubtask }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const typeStyles = {
    meal: "border-orange-400 bg-orange-50/30",
    break: "border-teal-400 bg-teal-50/30",
    logistic: "border-gray-400 bg-gray-50/50",
    main: "border-brand-500 bg-white"
  };

  const typeLabel = {
    meal: "Comida",
    break: "Descanso",
    logistic: "Logística",
    main: "Actividad"
  };

  const totalSubtasks = event.subtasks ? event.subtasks.length : 0;
  const completedSubtasks = event.subtasks ? event.subtasks.filter(st => st.completed).length : 0;
  const isAllCompleted = totalSubtasks > 0 && completedSubtasks === totalSubtasks;
  const isPartiallyCompleted = completedSubtasks > 0 && completedSubtasks < totalSubtasks;

  const currentStyle = typeStyles[event.type] || typeStyles.main;

  let semaphoreColor = "bg-red-100 border-red-400 text-red-500";
  let semaphoreIcon = <div className="w-3 h-3 rounded-full bg-red-500"></div>;

  if (isAllCompleted) {
    semaphoreColor = "bg-green-500 border-green-500 text-white";
    semaphoreIcon = <IconCheck />;
  } else if (isPartiallyCompleted) {
    semaphoreColor = "bg-yellow-100 border-yellow-400 text-yellow-600";
    semaphoreIcon = <div className="w-4 h-4 rounded-full bg-yellow-400 animate-pulse shadow-sm shadow-yellow-500"></div>;
  }

  return (
    <div
      className={`relative ml-0 sm:ml-8 rounded-2xl border-l-4 transition-all duration-300 shadow-sm
        ${currentStyle}
        ${isAllCompleted ? 'opacity-70 bg-gray-50 border-gray-300' : 'hover:shadow-md'}
      `}
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 sm:p-5 cursor-pointer flex justify-between items-start gap-3"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full bg-white border ${isAllCompleted ? 'text-gray-500' : 'text-gray-800'}`}>
              <IconClock /> {event.time}
            </span>

            {event.type && event.type !== "main" && (
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                {typeLabel[event.type]}
              </span>
            )}
          </div>

          <h3 className={`text-base sm:text-lg font-bold leading-tight mb-1 ${isAllCompleted ? 'text-gray-600' : 'text-gray-900'}`}>
            {event.activity}
          </h3>

          {!isExpanded && (
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
              <span className={`flex items-center gap-1 font-medium px-2 py-0.5 rounded ${isPartiallyCompleted ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' : ''}`}>
                <IconList /> {completedSubtasks}/{totalSubtasks} logística
              </span>

              {event.responsible && (
                <span className="flex items-center gap-1 truncate max-w-[150px]">
                  <IconUser /> {event.responsible}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-3">
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors shadow-sm ${semaphoreColor}`}
            title={`${completedSubtasks} de ${totalSubtasks} completadas`}
          >
            {semaphoreIcon}
          </div>

          <div className="text-gray-400 bg-white/50 rounded-full p-1 border border-transparent hover:border-gray-200">
            <IconChevronDown expanded={isExpanded} />
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 sm:px-5 sm:pb-5 border-t border-gray-200/50 pt-3 animate-[slideDown_0.2s_ease-out]">
          {event.description && (
            <div className="mb-4 bg-white/60 rounded-lg p-3 border border-white/40">
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">¿En qué consiste?</h4>
              <p className="text-sm text-gray-700 leading-snug">{event.description}</p>

              {event.responsible && (
                <p className="text-sm text-brand-700 flex items-center font-semibold mt-2 bg-brand-50 inline-flex px-2 py-1 rounded">
                  <IconUser /> Responsable: {event.responsible}
                </p>
              )}
            </div>
          )}

          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-1">
              <IconList /> Logística / Tareas Paso a Paso
            </h4>

            <div className="space-y-2">
              {event.subtasks && event.subtasks.map(task => (
                <label
                  key={task.id}
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all
                    ${task.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200 hover:border-brand-300'}
                  `}
                >
                  <div className="mt-0.5">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 text-brand-600 focus:ring-brand-500 transition-all cursor-pointer"
                      checked={task.completed}
                      onChange={() => onToggleSubtask(event.id, task.id)}
                    />
                  </div>

                  <span className={`text-sm leading-tight select-none pt-0.5 ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                    {task.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Modal
function AddEventModal({ selectedDate, onClose, onSave }) {
  const [formData, setFormData] = useState({
    date: selectedDate,
    time: "12:00",
    activity: "",
    description: "",
    responsible: "",
    type: "main",
    logisticsText: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.activity.trim()) return;

    const eventToSave = {
      date: formData.date,
      time: formData.time,
      activity: formData.activity,
      description: formData.description,
      responsible: formData.responsible,
      type: formData.type,
      subtasks: EventModel.buildSubtasksFromText(formData.logisticsText, formData.activity)
    };

    onSave(eventToSave);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-gray-900/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease-out] flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-5 border-b border-gray-100 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-800">Nueva Actividad</h2>

          <button onClick={onClose} className="p-2 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition">
            <IconClose />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 hide-scrollbar">
          <form id="add-event-form" onSubmit={handleSubmit} className="p-5 space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Día</label>
                <input
                  type="date"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div className="w-1/3">
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Hora</label>
                <input
                  type="time"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-brand-500 transition"
                  value={formData.time}
                  onChange={e => setFormData({ ...formData, time: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Nombre de Actividad *</label>
              <input
                type="text"
                required
                placeholder="Ej. Reunión de bienvenida"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-brand-500 transition"
                value={formData.activity}
                onChange={e => setFormData({ ...formData, activity: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Tipo</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "main", label: "Principal", color: "bg-brand-100 text-brand-700 border-brand-200" },
                  { id: "meal", label: "Comida", color: "bg-orange-100 text-orange-700 border-orange-200" },
                  { id: "break", label: "Descanso", color: "bg-teal-100 text-teal-700 border-teal-200" },
                  { id: "logistic", label: "Logística", color: "bg-gray-100 text-gray-700 border-gray-200" }
                ].map(type => (
                  <div
                    key={type.id}
                    onClick={() => setFormData({ ...formData, type: type.id })}
                    className={`border rounded-lg text-sm font-medium py-1.5 text-center cursor-pointer transition-all
                      ${formData.type === type.id ? type.color + ' ring-2 ring-offset-1 ring-brand-400/50' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}
                    `}
                  >
                    {type.label}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">¿En qué consiste? (Descripción)</label>
              <textarea
                rows="2"
                placeholder="Detalles generales..."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:border-brand-500 transition resize-none"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-600 uppercase mb-1">Logística (Tareas paso a paso)</label>
              <p className="text-[10px] text-gray-500 mb-1 leading-tight">Escribe una tarea por línea. Se convertirán en checkboxes interactivos.</p>
              <textarea
                rows="3"
                placeholder={"Ej:\nImprimir listas\nLlevar lapiceros\nAcomodar sillas"}
                className="w-full bg-brand-50/30 border border-brand-200 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:border-brand-500 transition resize-none placeholder:text-gray-400"
                value={formData.logisticsText}
                onChange={e => setFormData({ ...formData, logisticsText: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Responsable(s)</label>
              <input
                type="text"
                placeholder="Ej. Ana, Equipo de Logística"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:border-brand-500 transition"
                value={formData.responsible}
                onChange={e => setFormData({ ...formData, responsible: e.target.value })}
              />
            </div>
          </form>
        </div>

        <div className="p-4 border-t border-gray-100 flex-shrink-0 bg-white">
          <button
            type="submit"
            form="add-event-form"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-brand-500/30 transition-all active:scale-[0.98]"
          >
            Guardar Actividad
          </button>
        </div>
      </div>
    </div>
  );
}