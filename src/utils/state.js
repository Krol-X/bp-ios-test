export const newState = (inital_value) => {
  let state = inital_value
  const subscribers = []
  
  return {
    subscribe: (fun) => subscribers.push(fun),
    set: (new_value) => {
      state = new_value
      subscribers.forEach(fun => fun(new_value))
    },
    get() {
      return state
    }
  }
}
