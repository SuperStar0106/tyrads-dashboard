import React from "react";

interface ExpensesIncomeChartProps {
  expenses: number;
  incomes: number;
}

const ExpensesIncomeChart: React.FC<ExpensesIncomeChartProps> = ({
  expenses,
  incomes,
}) => {
  const expensesWidth = `${(expenses / (expenses + incomes)) * 100}%`;
  const incomesWidth = `${(incomes / (expenses + incomes)) * 100}%`;

  return (
    <div className="flex w-full gap-1">
      <div
        className="bg-primary rounded-md h-4"
        style={{ width: expensesWidth }}
      ></div>
      <div
        className="bg-meta-6 rounded-md h-4"
        style={{ width: incomesWidth }}
      ></div>
    </div>
  );
};

const ExpensesIncome: React.FC = () => {
  return (
    <div className="rounded-2xl border border-stroke bg-white px-4 py-4 dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col items-start justify-between gap-3">
        <h1 className="text-title-xsm font-bold">Expenses and income</h1>
        <div className="flex w-full">
          <div className="flex flex-grow flex-col items-start">
            <p className="text-sm font-bold">Expense</p>
            <p className="text-title-sm">75%</p>
            <p className="text-sm text-slate-300">5.653</p>
          </div>
          <div className="flex flex-grow flex-col items-center">
            <p className="text-sm font-bold">|</p>
            <p className="flex items-center text-sm">VS</p>
            <p className="text-sm font-bold">|</p>
          </div>
          <div className="flex flex-grow items-end flex-col">
            <p className="text-sm font-bold">Income</p>
            <p className="text-title-sm">40%</p>
            <p className="text-sm text-slate-300">2.656</p>
          </div>
        </div>
        <ExpensesIncomeChart expenses={75} incomes={40} />
      </div>
    </div>
  );
};

export default ExpensesIncome;
