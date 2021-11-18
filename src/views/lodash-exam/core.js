const path = require('path')
const _ = require('lodash')
const fs = require('fs')

const TestMoment = require('./TestMoment')
const TestLodash = require('./TestLodash')

class NodeCli {
  constructor(config) {
    this.config = config
    this.users = this.loadUsers()
    console.log(`用户数量：${this.users.length}`)
  }

  loadUsers() {
    try {
      let content = fs.readFileSync('./docs/user.json', 'utf8')
      return JSON.parse(content)
    } catch (err) {
      console.error(err)
      return []
    }
  }

  /**
   * 入口
   */
  run() {
    console.log(`run`)

    let testLodash = new TestLodash()
    testLodash.run()

    let testMoment = new TestMoment()
    testMoment.run()
  }
}

module.exports = NodeCli
