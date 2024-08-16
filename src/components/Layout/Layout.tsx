import React, { ReactNode } from "react";
import './Layout.css'

interface IProps {
	children?: ReactNode;
}

function Layout(props: IProps) {
	return <div className="Layout">
        {props.children}
    </div>;
}

export default Layout;
