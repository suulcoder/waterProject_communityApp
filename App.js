import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import {loadState,saveState} from './store'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from "react-native-router-flux";
import createSagaMiddleware from 'redux-saga';
import Home from './src/components/Home';
import mainSaga from './src/sagas';
import React from 'react';
import reducer from './src/reducers';
import throttle from 'lodash/throttle';
import Contact from './src/components/Contact';
import About from './src/components/About';
import Info from './src/components/Info';
import Settings from './src/components/Settings';
import Whyitworks from './src/components/Whyitworks';
import HowEcofiltroWorks from './src/components/HowEcofiltroWorks';
import HowTheCompanyWorks from './src/components/HowTheCompanyWorks';
import HowtoUse from './src/components/HowtoUse';
import FAQ from './src/components/FAQ';
import Bacterias from './src/components/Bacterias';
import Health from './src/components/WaterAndHealth';
import Pollution from './src/components/pollution';
import Stories from './src/components/Stories';
import Story1 from './src/components/Story1';
import Story2 from './src/components/Story2';

//localStorage.clear();
let persistedState = loadState()

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,persistedState,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);
store.subscribe(throttle(()=>{
  saveState(store.getState());
}),5000)

export default function App() {
  return (
    <Provider store={store}>
      <Router>                                                                                 
        <Stack key="root" >
          <Scene key="Home" component={Home}  hideNavBar={true} />
          <Scene key="Contact" component={Contact}  hideNavBar={true} />
          <Scene key="About" component={About}  hideNavBar={true} />
          <Scene key="Info" component={Info}  hideNavBar={true} />
          <Scene key="Settings" component={Settings}  hideNavBar={true} />
          <Scene key="Whyitworks" component={Whyitworks}  hideNavBar={true} />
          <Scene key="HowEcofiltroWorks" component={HowEcofiltroWorks}  hideNavBar={true} />
          <Scene key="HowTheCompanyWorks" component={HowTheCompanyWorks}  hideNavBar={true}/>
          <Scene key="HowtoUse" component={HowtoUse}  hideNavBar={true}/>
          <Scene key="FAQ" component={FAQ}  hideNavBar={true}/>
          <Scene key="Bacterias" component={Bacterias}  hideNavBar={true}/>
          <Scene key="Health" component={Health}  hideNavBar={true}/>
          <Scene key="Pollution" component={Pollution}  hideNavBar={true}/>
          <Scene key="Stories" component={Stories}  hideNavBar={true}/>
          <Scene key="Story1" component={Story1}  hideNavBar={true}/>
          <Scene key="Story2" component={Story2}  hideNavBar={true}/>
        </Stack>
      </Router>        
   </Provider>
  );
}
