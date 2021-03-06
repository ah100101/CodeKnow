const topics = [
  {
    key: 'javascript',
    text: '⚛️ Javascript',
    buttonText: 'Javascript'
  },
  {
    key: 'html',
    text: '🔨 HTML',
    buttonText: 'HTML'
  },
  {
    key: 'css',
    text: '📃 CSS',
    buttonText: 'CSS'
  }
]

const categories = [
  { 
    key: 'computer',
    text: '💻 Computer required',
    buttonText: 'Computer'
  },
  { 
    key: 'nocomputer',
    text: '⛔️ No computer needed',
    buttonText: 'No Computer'
  },
  { 
    key: 'whiteboard',
    text: '✏️ You may want a whiteboard',
    buttonText: 'Whiteboard'
  },
  { 
    key: 'nowhiteboard',
    text: '⛔️ No whiteboarding',
    buttonText: 'No Whiteboard'
  },
  {
    key: 'performance',
    text: '🚀 Performance',
    buttonText: 'Performance'
  }
]

const difficultyRatings = [
  { 
    key: 'easy',
    text: '😅 Easy',
    buttonText: '😅 Easy'
  },
  { 
    key: 'medium',
    text: '🤔 Medium',
    buttonText: '🤔 Medium'
  },
  { 
    key: 'hard',
    text: '😨 Hard',
    buttonText: '😨 Hard'
  },
  { 
    key: 'unknown',
    text: '😵 Not so sure about this one',
    buttonText: '😵 Unknown'
  },
  { 
    key: 'impossible',
    text: '☠️ Impossible',
    buttonText: '☠️ Impossible'
  }
]

const isValidDifficulty = (key) => {
  return difficultyRatings
    .filter(rating => rating.key === key)
    .length > 0
}

const isValidCategory = (key) => {
  return categories
    .filter(category => category.key === key)
    .length > 0
}

const categoryText = topics
  .concat(categories)
  .reduce((acc, category) => {
    acc[category.key] = category.text
    return acc
  }, {})

const difficultyRatingText = difficultyRatings
  .reduce((acc, rating) => {
    acc[rating.key] = rating.text
    return acc
  }, {})

export default {
  difficultyRatings,
  topics,
  categories,
  categoryText,
  difficultyRatingText,
  isValidDifficulty,
  isValidCategory
}