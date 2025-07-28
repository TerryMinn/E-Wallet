import { useEffect, useState } from "react";

export const useBalanceQuery = ({ id }: { id: string }) => {
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      setIsLoading(true);
      const raw = await fetch(`/api/balance/${id}`);
      const res = await raw.json();
      setAmount(res.data.amount);
      setIsLoading(false);
    };
    fetchBalance();
  }, []);

  return { isLoading, amount };
};
