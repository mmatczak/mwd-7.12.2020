import {EmployeeCtrl} from './employee-ctrl.js';
import {EmployeeService} from './employee-service.js';

const controller = new EmployeeCtrl(1234, new EmployeeService());
controller.initializeForm();
