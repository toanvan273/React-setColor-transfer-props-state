import React, { Component } from 'react';
import SetColor from './components/setColor'
import SetFont from './components/SetFont'
import Result from './components/Result'
import Reset from './components/Reset'

import {withTranslate} from 'react-redux-multilingual'
import { connect } from "react-redux";
class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            color : 'red',
            fontSize: 16,
            name:null
        }
    }
    toGetColor = (param) => {
        this.setState({
            color: param
        })
    }
    togetFont = (param) => {
        if(this.state.fontSize + param >= 8 && this.state.fontSize + param <= 36 ){
            this.setState({
                fontSize: this.state.fontSize + param
            })
        }
        
    }
    toReset = (x) => {
        if(x){
            this.setState({
                color : 'red',
                fontSize: 16,
            })
        }
    }
    UNSAFE_componentWillReceiveProps(n){
        console.log('hihi',n);
    }
    onChangeLanguage=typeLan=>{
        this.props.onChangeLanguage(typeLan)
        // dispatch(IntlActions.setLocate(typeLan))
    }
  render() {

      const {translate} = this.props
    return (
    
      <div className="container">
          <div className="row">
              <button onClick={()=>this.onChangeLanguage('vn')}>{translate('language.vn')}</button>
              <button onClick={()=>this.onChangeLanguage('en')}>{translate('language.en')}</button>
              <button onClick={()=>this.onChangeLanguage('jp')}>{translate('language.jp')}</button>
          </div>
        <div className="row">
           <SetColor color={this.state.color} getColor={this.toGetColor}/>
            <SetFont fontSize={this.state.fontSize} getFont={this.togetFont}/>
        </div>

        <div className="row">
           <Result color={this.state.color} fontSize={this.state.fontSize}/>
            <Reset toReset={this.toReset}/>
        </div>
        <div className='test-muti-language'>
            <p>{translate('welcome',{value:'Reactjs'})}</p>
            <p>{translate('name',{name:'Thái'})}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps=state=>{
    return {
        translations: state.translationReducer
    }
}
export default withTranslate(connect(mapStateToProps,null)(App)) ;
