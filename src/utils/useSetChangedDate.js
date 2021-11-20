import { useEffect } from 'react';

export const useSetChangedDate = (setReportContext, date) => {
  useEffect(() => {
    setReportContext(() => ({
      viewDate: date,
    }));
  }, [date]);
};
