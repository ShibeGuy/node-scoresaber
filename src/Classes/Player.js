const axios = require('axios')
const Base = require('./Base')
const searchPlayers = require('../Functions/searchPlayers')

class Player extends Base {
  /**
   * Assigns ID
   * 
   * @param {Number|String} id 
   */
  constructor(id) {
    super()

    this.id = id
  }

  /**
   * Get player data and score data
   */
  async get() {
    if(!this.id) throw Error('Current object has no ID. Did you forget to provide one in the constructor or .find()?')

    let res = await axios.get(this.default_url + '/api/player/' + this.id + '/full')
    let data = res.data.playerInfo

    this.name = data.playerName
    this.avatar_url = this.default_url + data.avatar
    this.rank = data.rank
    this.countryRank = data.countryRank
    this.country = data.country
    this.pp = data.pp
    this.role = data.role
    this.badges = data.badges.map(o => {
      o.image = 'https://new.scoresaber.com/api/static/badges/' + o.image
      return o
    })
    this.isBanned = data.banned === 1
    this.isInactive = data.inactive === 1
    this.totalScore = res.data.scoreStats.totalScore
    this.totalRankedScore = res.data.scoreStats.totalRankedScore
    this.averageRankedAccuracy = res.data.scoreStats.averageRankedAccuracy
    this.playCount = res.data.scoreStats.totalPlayCount
    this.rankedPlayCount = res.data.scoreStats.rankedPlayCount

    return this
  }

  /**
   * Find and get the first player using a search term. If no player exists, don't do anything
   * and return false.
   * 
   * @param {String} name 
   */
  async find(name) {
    let players = await searchPlayers(name)

    // If at least one player shows up in the search, get() them
    if(players[0]) {
      this.id = players[0].playerId
      await this.get()
      return this
    }

    return false
  }

  /**
   * Get top scores of player based on page number
   * 
   * @param {Number} num 
   */
  async getTopScores(num = 1) {
    let res = await axios.get(this.default_url + '/api/player/' + this.id + '/scores/top/' + num)
    let data = res.data

    return data.scores
  }

  /**
   * Get recent scores of player based on page number
   * 
   * @param {Number} num 
   */
  async getRecentScores(num = 1) {
    let res = await axios.get(this.default_url + '/api/player/' + this.id + '/scores/recent/' + num)
    let data = res.data

    return data.scores
  }
}

module.exports = Player