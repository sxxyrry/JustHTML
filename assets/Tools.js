function deepcopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepcopy(item));
  }
  
  if (typeof obj === "object") {
    const copiedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copiedObj[key] = deepcopy(obj[key]);
      }
    }
    return copiedObj;
  }
}