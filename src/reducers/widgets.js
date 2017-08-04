//TODO: each message should probably be its own reducer
// and messages should be composed of these reducers

import {
  ADD_WIDGET,
} from '../actions'

const initialState = {
  ids: [],
  byId: {}
}

export default (state = initialState, action) => {
  console.log('reducer', action)
  console.log(state)
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        ids: [...state.ids, action.widgetId],
        byId: {
          ...state.byId,
          [action.widgetId] : action.widget
        }
      }

    default:
      // return Object.assign({}, state, {
      //   [action.subreddit]: posts(state[action.subreddit], action)
      // })

      if (action.widgetId) {
        return {
          ...state,
          byId: {
            ...state.byId,
            [action.widgetId] : state.byId[action.widgetId]['reducer'](state.byId[action.widgetId], action)
          }
        }
      } else {
        return state;
      }
  }

}

function toggleProperty(messages, messageId, property) {
  return {
    ...messages,
    [messageId] : {
      ...messages[messageId],
      [property]: !messages[messageId][property]
    }
  }
}

function setPropertyValueOnCollection(byId, messageIds, property, value) {
  const newById = messageIds.reduce((byId, messageId) => {
    const newById = setPropertyValue(byId, messageId, property, value)
    return newById
  }, byId)

  return newById;
}

function setPropertyValue(byId, messageId, property, value) {
  return {
    ...byId,
    [messageId] : {
      ...byId[messageId],
      [property]: value
    }
  }
}


function index(collection) {
  return collection.reduce((result, record) => {
    result[record.id] = record
    return result
  }, {})
}
