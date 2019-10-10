module.exports= function pick(obj, ...options) {
    const [firstOpts] = options
    const newObj = {}
  if (typeof firstOpts === 'function') {
      const callback = firstOpts
      // with callback
      for (const item of Object.entries(obj)) {
          const [key, value] = item
          if (callback(value, key) === true) {
              newObj[key] = obj[key]
          }
      }
  }
  else {
      // with keys
      for (const key of options) {
          if (obj[key] !== undefined) {
              newObj[key] = obj[key]
          }
      }
  }
    return newObj
}
