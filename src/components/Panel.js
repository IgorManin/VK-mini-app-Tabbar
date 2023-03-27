import React from 'react';
import {PanelHeader, PanelHeaderBack, Panel as PanelComponent} from "@vkontakte/vkui";
import PropTypes from "prop-types";
import {Tabbar} from "./Tabbar";

export const Panel = ({id, onClick, title, children}) => (
            <PanelComponent id={id}>
                <PanelHeader before={<PanelHeaderBack onClick={onClick}/>}>{title}</PanelHeader>
                {children}
            </PanelComponent>
)

Tabbar.propTypes = {
    id:PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.string,
};


