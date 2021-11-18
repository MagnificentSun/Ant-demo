const path = require("path");
const _ = require('lodash');
const fs = require('fs');

class TestLodash {
  constructor() {
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
   * @TODO: 测试lodash数组操作-过滤
   * 要求：从this.users列表中，过滤得到所有在岗女性列表
   * status字段：1为在岗；0为离岗；
   * sex字段：0为男性；1为女性；
   */
  findFemaleEmployees() {
    //   console.log(this.users)
    let arr = []
    _.forEach(this.users, function(item){
        if (item.status == 1 && item.sex == 1) {
            arr.push(item)
        }
    })
    console.log('所有在岗女性列表')
    console.log(arr)
  }

  /**
   * @TODO: 测试lodash数组操作-排序
   * 要求：将this.users按照姓名字母顺序排序
   */
  sortByUserName() {

  }

  /**
   * @TODO: 测试lodash数组操作-Map/Reduce操作
   * 要求：计算所有用户username字段长度并得到username长度的平均值（结果用toFixed函数取整）
   */
  calcUsernameAvgLength() {
    let total = _.reduce(_.map(this.users, item => item.username.length), (sum, n) => {
        return sum + n;
    }, 0);
    let avg = (total / this.users.length).toFixed(0)
    console.log('字段平均值：'+avg)
  }

  /**
   * @TODO: 测试lodash数组操作-转换成Object
   * 要求：将this.users转换成 {xxxx: {id: xxxx, username: '胡', ... ...}} 的Object形式
   */
  getUserMap() {
    let obj = this.users.reduce(function(obj, item) {
        obj[item.id] = item; 
        return obj; 
    }, {});
    console.log('数组转换为对象：')
    console.log(obj);
  }

  /**
   * @TODO: 测试lodash链式操作-使用chain
   * 要求：从this.users中计算得到姓李的男性数量和姓李的女性数量。返回结果格式为：[8, 9]，8为男性数量；9为女性数量；
   * 请使用一行代码实现
   */
  countNumUsingChain() {
    let arr = _.chain(this.users).filter(item =>item.realname&&item.realname.charAt(0) == '李').map(item =>{return item.sex==0?[1,0]:[0,1]}).value()
    console.log('姓李的男、女性数量：')
    console.log(arr)
  }

  /**
   * @TODO: 测试lodash字符串操作-命名格式转换
   * 要求：将输入的内容，转换成大写驼峰格式。例如，输入 abc-def_ghi，返回AbcDefGhi
   */
  toUpperCamelCase(inputStr) {
    let val = _.upperFirst(_.camelCase(inputStr))
    console.log('转换成大写驼峰格式：')
    console.log(val)
  }
}

module.exports = TestLodash
