/**
 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
 */
"use strict";

import {React} from 'base';
let { Component, PropTypes } = React;
let { PureRenderMixin } = React.addons;

import classNames from 'classnames/bind';
import styles from './index.scss';
let cx = classNames.bind(styles);

const  KEY_MAP = {
  "37" : 0, //"left",
  "38" : 1, //"up",
  "39" : 2,//"right",
  "40" : 3//"down"
};
export default class Snake extends Component {

  static propTypes = {

  };

  /**
   * default props
   */
  static defaultProps = {
    unit : 10,
    model : []
  };

  /**
   * init state
   */
  state = {
    direction : 3,
    snakeModel : []
  };

  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.play();
    document.addEventListener('keydown',function(e){
      var userDirection = this.props.keyMap[e.keyCode];
      if(!this._isAllowDirection(userDirection)){
        return;
      }
      this.setState({
        direction : userDirection
      });
    }.bind(this),true);
  }
  play(){
    setInterval(function(){
      this.move(this.state.direction);
    }.bind(this),60);
  }
  /**
   * 蛇的移动
   * @param direction 移动的方向
     */
  move(direction){
    let snakeModel = this.props.model
    let newPos = Object.assign({},snakeModel[0]);
    switch(direction){
      case 1 : //up
        newPos.y  = newPos.y-1;
        break;
      case 3 : //down
        newPos.y ++ ;
        break;
      case 0 : //left
        newPos.x -- ;
        break;
      case 2 : //right
        newPos.x ++ ;
        break;
      default :
        break;
    }
    this._doMove(snakeModel, newPos);
    this.setState(snakeModel,function(){
      this.props.onMove(newPos);
    });
  }

  /**
   * 检测是否是反方向运动,只有在蛇的节点大于1时需要检测
   * @param direction
   * @returns {boolean}
   * @private
     */
  _isAllowDirection(direction){
    return !(Math.abs(direction - this.state.direction) == 2 && this.props.model.length > 1);
  }
  /**
   * 移动算法的实现,去掉最后一个蛇节点,头部插入一个蛇的节点
   * @param newPos
   * @private
     */
  _doMove(snakeModel,newPos){
    snakeModel.pop();
    snakeModel.unshift(newPos);
  }
  render() {
    var unit = this.props.unit;
    var snakeNodes = this.props.model.map(function (item) {
      let nodeStyle = {
        left : item.x * unit,
        top : item.y * unit,
        width:unit,
        height:unit
      }
      return (
        <div className={styles.snakeNode} style={nodeStyle}></div>
      );
    })
    return (
      <div>
      {snakeNodes}
      </div>
    );
  }
}
