import React from 'react';
import {PanelHeader, PanelHeaderBack, Panel as PanelComponent} from "@vkontakte/vkui";

export const Panel = ({id, onClick, title, children}) => (
            <PanelComponent id={id}>
                <PanelHeader before={<PanelHeaderBack onClick={onClick}/>}>{title}</PanelHeader>
                {children}
            </PanelComponent>
)


