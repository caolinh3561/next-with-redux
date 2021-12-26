export const tickActionTypes = {
  TICK: 'TICK',
}

export const serverRenderClock = () => (dispatch) => {
  return dispatch({
    type: tickActionTypes.TICK,
    ts: Date.now(),
  })
}

export const startClock = () => (dispatch) => {
  return setInterval(
    () => dispatch({ type: tickActionTypes.TICK, light: true, ts: Date.now() }),
    1000
  )
}
