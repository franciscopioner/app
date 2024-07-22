class EventBus {
    private listeners: { [key: string]: Function[] } = {};
  
    emit(event: string, data?: any) {
      if (!this.listeners[event]) return;
      this.listeners[event].forEach(listener => listener(data));
    }
  
    on(event: string, listener: Function) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
    }
  
    off(event: string, listener: Function) {
      if (!this.listeners[event]) return;
      this.listeners[event] = this.listeners[event].filter(l => l !== listener);
    }
  }
  
  const eventBus = new EventBus();
  export default eventBus;
  