import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SideBar from "components/SideBar";
import Header from "components/Header";
import s from "./styles/App.module.scss";

const DashboardView = lazy(() =>
  import("views/DashboardView" /* webpackChunkName: "dashboard" */)
);
const OpenAccountView = lazy(() =>
  import("views/OpenAccountView" /* webpackChunkName: "open account" */)
);
const InvestmentView = lazy(() =>
  import("views/InvestmentView" /* webpackChunkName: "investment" */)
);
const PartnershipView = lazy(() =>
  import("views/PartnershipView" /* webpackChunkName: "partnership" */)
);
const TradingHistoryView = lazy(() =>
  import("views/TradingHistoryView" /* webpackChunkName: "trading history" */)
);
const DepositWithdrawView = lazy(() =>
  import("views/DepositWithdrawView" /* webpackChunkName: "deposit withdraw" */)
);

function App() {
  return (
    <div className={s.container}>
      <SideBar />
      <main className={s.content}>
        <Header />
        <article className={s.routeView}>
          <Suspense fallback="loading">
            <Routes>
              <Route path="/" element={<DashboardView />} />
              <Route path="/open-account" element={<OpenAccountView />} />
              <Route
                path="/investments-fund-mgmt"
                element={<InvestmentView />}
              />
              <Route path="/ib-partnership" element={<PartnershipView />} />
              <Route path="/trading-history" element={<TradingHistoryView />} />
              <Route
                path="/deposit-withdraw"
                element={<DepositWithdrawView />}
              />
            </Routes>
          </Suspense>
        </article>

        <footer className={s.footer}>
          <p>
            Risk Warning Note: Forex and CFDs are leveraged products, incur a
            high level of risk and may not be suitable for all investors. You
            should not risk more than you are prepared to lose. Before deciding
            to trade, please ensure you understand the risks involved and take
            into account your level of experience. Seek independent advice if
            necessary.
          </p>
          <p>
            © 2020 Copyright KenmoreFX Inc. 2010-2020 All rights reserved.
            Various trademarks held by their respective owners. <br /> One
            Financial Center, Suite 1000, Boston, MA, 02111, United States
          </p>
        </footer>
      </main>
    </div>
  );
}
export default App;
