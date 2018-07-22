class FrusterError {
    
  /**
   * Creates a fruster error from provided json model.
   * 
   * @param {object} model 
   */
  constructor(model) {
      this.status = model.status;
      this.code = model.error.code;
      this.title = model.error.title;
      this.detail = model.error.detail;
      this.id = model.error.id;
      this.reqId = model.reqId;
  }

  log() {
      console.log(`[${this.status}: ${this.code}] ${this.title} - ${this.detail}`);
  }

  titleAndDetail() {
      return `${this.title}: ${this.detail}`;    
  }

}

/**
* Convenient factory method to create error without knowledge
* of fruster error json model.
*/
FrusterError.create = (status, code, title, detail) => {
  return new FrusterError({
      status,
      error: { code, title, detail }
  });
}

export default FrusterError;