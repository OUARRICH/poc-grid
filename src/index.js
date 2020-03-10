import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

 function mapData(data) {
     let result = [];

     for(let item in data){
        let services = data[item].services;

        for(let service in services){
            const subServices = services[service].subServices;
            for(let subService in subServices){
                const workloads = subServices[subService].workloads;

                for(let workload in workloads){
                    result = [...result, {
                        service: services[service].name,
                        subService: subServices[subService].name,
                        code: workloads[workload].code,
                        description: workloads[workload].description
                    }];
                }
            }
        }
     }

     return result;
 }