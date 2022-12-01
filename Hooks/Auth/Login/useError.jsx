import { useState } from "react";

export const useError = () => {
  const errorCheck = async (error, setModalVisible, setValidationMessage) => {
    const notifyError = await error;
    
    if (notifyError) {
      setModalVisible(true);
      setValidationMessage(notifyError);
    }
  };

  return { errorCheck };
};
