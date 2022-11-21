import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import NavBar from './components/common/header/nav-bar';
import AccountBalance from './pages/account/account-balance';
import AccountStatments from './pages/account/account-statements';
import ExchangeVoucher from './pages/account/exchange-voucher';
import NewAccount from './pages/account/new-acount';
import Branch from './pages/company/branch';
import { Capital } from './pages/company/capital';
import CaomapanyProfile from './pages/company/company-profile';
import FiscalYear from './pages/company/fiscal-year';
import GoodWell from './pages/company/good-will';
import Role from './pages/company/role';
import TodoList from './pages/company/todo-list';
import User from './pages/company/user';
import BalanceSheet from './pages/customer/balance-sheet';
import BalanceTransfer from './pages/customer/balance-transfer';
import Discount from './pages/customer/discount';
import NewCustomer from './pages/customer/new-customer';
import OpeningBalance from './pages/customer/opening-balance';
import Statements from './pages/customer/statements';
import Voucher from './pages/customer/voucher';
import PayRoll from './pages/employee/pay-roll';
import ExpenceInvocie from './pages/expense/expence-invoice';
import HawalaProccess from './pages/hawala/Hawal-procces';
import HawalaList from './pages/hawala/hawala-list';
import HawalaVoucher from './pages/hawala/hawala-voucher';
import City from './pages/master/Country/city'
import Country from './pages/master/Country/country'
import Currency from './pages/master/currency';
import CurrencyRelation from './pages/master/currency-relation';
import BalanceBranch from './pages/report/branch-balance';
import { BranchStatement } from './pages/report/branch-statements';
import CompanyBalanceSheet from './pages/report/company-balance-sheet';
import DailyReport from './pages/report/daily-report';


const App = () => {
  return (
    <div>
      
    <BrowserRouter>
      <NavBar/>

       {/* Master-routes */}
      <Routes>
      <Route path="/" element={<Country />} />
      <Route path="city" element={<City />} />
      <Route path="Currency" element={<Currency />} />
      <Route path="CurrencyRelation" element={<CurrencyRelation />} />
     

     {/* comapny-routes */}
      <Route path="/" element={<Branch />} />
      <Route path="capital" element={<Capital />} />
      <Route path="company-profile" element={<CaomapanyProfile />} />
      <Route path="fiscal-year" element={<FiscalYear />} />
      <Route path="good-will" element={<GoodWell />} />
      <Route path="role" element={<Role />} />
      <Route path="user" element={<User />} />
      <Route path="todo-list" element={<TodoList />} />

      {/* customer-routes */}   
      <Route path="/new-customer" element={<NewCustomer />} />
      <Route path="balance-sheet" element={< BalanceSheet/>} />
      <Route path="balance-transfer" element={<BalanceTransfer />} />
      <Route path="vouncher" element={<Voucher />} />
      <Route path="opening-balance" element={<OpeningBalance />} />
      <Route path="statements" element={<Statements />} />
      <Route path="discount" element={<Discount />} />
  
        {/* hwala-routes */}
      <Route path="hawala-procces" element={<HawalaProccess />} />
      <Route path="hawala-list" element={<HawalaList />} />
      <Route path="hawala-voucher" element={<HawalaVoucher />} />

          {/* accounts-routes */}
          <Route path="account-balance" element={<AccountBalance />} />
        <Route path="account-statements" element={<AccountStatments />} />
        <Route path="exchnage-voucher" element={<ExchangeVoucher />} />
        <Route path="new-account" element={<NewAccount />} />


         {/* expense-routes */}
         <Route path="expense-invoice" element={<ExpenceInvocie />} />



        {/* employee-routes */}
      <Route path="pay-roll" element={<PayRoll />} />


        {/* reposrt-routes */}
        <Route path="branch-statements" element={<BranchStatement />} />
        <Route path="branch-balance" element={<BalanceBranch />} />
        <Route path="company-balnce" element={<CompanyBalanceSheet />} />
        <Route path="daily-report" element={<DailyReport />} />



      </Routes>


      
    </BrowserRouter>
    </div>
  )
}

export default App