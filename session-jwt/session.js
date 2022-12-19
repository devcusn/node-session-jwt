class Session {
  sessionID;
  constructor() {
    this.sessionID = this.uid();
  }

  uid() {
    return Date.now().toString(36) + Math.random().toString(36);
  }
}

module.exports = Session;
