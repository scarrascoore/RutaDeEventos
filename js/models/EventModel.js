class EventModel {
  static STORAGE_KEY = "evento_logistica_data";

  static load(initialData) {
    const savedEvents = localStorage.getItem(this.STORAGE_KEY);

    if (!savedEvents) {
      return initialData;
    }

    let parsedEvents = JSON.parse(savedEvents);

    // Limpieza de IDs viejos del día 2
    const oldDay2Ids = [
      "14","15","16","17","18","19","20","21",
      "22","23","24","25","26","27","28","29","30","31"
    ];

    parsedEvents = parsedEvents.filter(e => !oldDay2Ids.includes(e.id));

    const existingIds = new Set(parsedEvents.map(e => e.id));
    const newEvents = initialData.filter(e => !existingIds.has(e.id));

    return [...parsedEvents, ...newEvents];
  }

  static save(events) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
  }

  static reset() {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  static getDailyEvents(events, selectedDate) {
    return events
      .filter(event => event.date === selectedDate)
      .sort((a, b) => a.time.localeCompare(b.time));
  }

  static toggleSubtask(events, eventId, subtaskId) {
    return events.map(event => {
      if (event.id !== eventId) return event;

      return {
        ...event,
        subtasks: event.subtasks.map(subtask =>
          subtask.id === subtaskId
            ? { ...subtask, completed: !subtask.completed }
            : subtask
        )
      };
    });
  }

  static addEvent(events, newEvent) {
    const eventWithId = {
      ...newEvent,
      id: Date.now().toString()
    };

    return [...events, eventWithId];
  }

  static buildSubtasksFromText(logisticsText, activity) {
    const subtasks = logisticsText
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map((text, index) => ({
        id: `new-${Date.now()}-${index}`,
        text,
        completed: false
      }));

    if (subtasks.length === 0) {
      subtasks.push({
        id: `new-${Date.now()}-default`,
        text: `Completar ${activity}`,
        completed: false
      });
    }

    return subtasks;
  }

  static calculateProgress(dailyEvents) {
    if (dailyEvents.length === 0) return 0;

    let totalSubtasks = 0;
    let completedSubtasks = 0;

    dailyEvents.forEach(event => {
      if (event.subtasks) {
        totalSubtasks += event.subtasks.length;
        completedSubtasks += event.subtasks.filter(task => task.completed).length;
      }
    });

    if (totalSubtasks === 0) return 0;

    return Math.round((completedSubtasks / totalSubtasks) * 100);
  }
}