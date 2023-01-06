import React, { useEffect } from "react";
import { userService } from "services";

const COLORS = ["#0088FE", "#FFBB28"];

export default function HomeHeader() {
  const [data, setData] = React.useState({ owe: 0, lent: 0 });

  useEffect(() => {
    const fetchExpenses = async () => {
      const result = await userService.findExpenseForUser();
      setData(
        { owe: Math.abs(+result.owe), lent: Number(result.lent) },
      );
    };
    fetchExpenses();
  }, []);

  return (
    <div className="flex flex-col items-left">
        <h1 className="text-2xl font-bold">Amount Owe: {data.owe}</h1>
        <h1 className="text-2xl font-bold">Amount Lent: {data.lent}</h1>
    </div>
  );
}
