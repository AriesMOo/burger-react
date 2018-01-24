import React from "react";

import Aux from "../../hoc/Auxiliarity";

import Classes from "./Layout.css"

// OJO !!! son parentesis (no llaves, pq si no deberia llevar un return)
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;