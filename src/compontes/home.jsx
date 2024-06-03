import DefaulLayout from "./defaulLayout";
import HeaderConten from "./headerConten";
import Main from "./main";
import SeccionInfo from "./seccionInfo";

export default function Home() {
  return (
      <DefaulLayout>
        <div className="App">
          <header>
            <HeaderConten />
          </header>
          <Main />
          <SeccionInfo />
        </div>
      </DefaulLayout>
  );
}