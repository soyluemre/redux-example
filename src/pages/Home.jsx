import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/features/dataReducer";
import loadingGif from "../assets/loading2.gif";

const Home = () => {
  const { dataList, loading } = useSelector((state) => state.data);
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="container text-center">
      {loading ? (
        <img width="50px" src={loadingGif} alt="loading" />
      ) : (
        <>
          <h6 className="text-center my-5 display-6">Güncel Döviz Kurları</h6>
          <table
            className={
              theme ? "border table table-dark" : "border table table-striped"
            }
          >
            <thead>
              <tr>
                <th scope="col">Para Birimi</th>
                <th scope="col">Alış Fiyatı</th>
                <th scope="col">Satış Fiyatı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="doviz-isim" scope="row">
                  {dataList[3]?.Isim}
                </th>
                <td>{dataList[3]?.BanknoteBuying}</td>
                <td>{dataList[3]?.BanknoteSelling}</td>
              </tr>
              <tr>
                <th className="doviz-isim" scope="row">
                  {dataList[0]?.Isim}
                </th>
                <td>{dataList[0]?.BanknoteBuying}</td>
                <td>{dataList[0]?.BanknoteSelling}</td>
              </tr>
              <tr>
                <th className="doviz-isim" scope="row">
                  {dataList[4]?.Isim}
                </th>
                <td>{dataList[4]?.BanknoteBuying}</td>
                <td>{dataList[4]?.BanknoteSelling}</td>
              </tr>
              <tr>
                <th className="doviz-isim" scope="row">
                  {dataList[1]?.Isim}
                </th>
                <td>{dataList[1]?.BanknoteBuying}</td>
                <td>{dataList[1]?.BanknoteSelling}</td>
              </tr>
              <tr>
                <th className="doviz-isim" scope="row">
                  {dataList[2]?.Isim}
                </th>
                <td>{dataList[2]?.BanknoteBuying}</td>
                <td>{dataList[2]?.BanknoteSelling}</td>
              </tr>
              <tr>
                <th className="doviz-isim" scope="row">
                  {dataList[5]?.Isim}
                </th>
                <td>{dataList[5]?.BanknoteBuying}</td>
                <td>{dataList[5]?.BanknoteSelling}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Home;
