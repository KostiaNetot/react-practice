import React from "react";
import { StoreServiceConsumer} from "../store-sevice-context";

const WithStoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <StoreServiceConsumer>
        {
          (storeService) => {
            return(
              <Wrapped {...props} storeservice={storeService}/>
            )
          }
        }
      </StoreServiceConsumer>
    )
  }
};

export default WithStoreService;
