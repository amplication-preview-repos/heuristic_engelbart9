import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BlogViewList } from "./blogView/BlogViewList";
import { BlogViewCreate } from "./blogView/BlogViewCreate";
import { BlogViewEdit } from "./blogView/BlogViewEdit";
import { BlogViewShow } from "./blogView/BlogViewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlogSubscriber"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BlogView"
          list={BlogViewList}
          edit={BlogViewEdit}
          create={BlogViewCreate}
          show={BlogViewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
