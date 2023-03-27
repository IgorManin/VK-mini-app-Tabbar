import React from "react";
import {
    Tabbar as TabbarComponent,
    TabbarItem,
} from '@vkontakte/vkui';
import {
    Icon28MessageOutline,
    Icon28NewsfeedOutline, Icon28ServicesOutline,
} from "@vkontakte/icons";
import {NEWS_PANEL, SERVICE_PANEL, SETTINGS_PANEL} from "../constants";
import PropTypes from 'prop-types';

const tabItems = [
    {panelId: NEWS_PANEL, Icon: Icon28NewsfeedOutline, label: 'Новости' },
    {panelId: SERVICE_PANEL, Icon: Icon28ServicesOutline, label: 'Сервис' },
    {panelId: SETTINGS_PANEL, Icon: Icon28MessageOutline, label: 'Настройки' },
]


export const Tabbar = ({activePanel, changePanels}) => (
            <TabbarComponent>
                {tabItems.map(({panelId, label, Icon}) => (
                    <TabbarItem
                        key={panelId}
                        onClick={changePanels}
                        selected={activePanel === panelId}
                        data-story={panelId}
                        text={label}
                    >
                    <Icon/>
                    </TabbarItem>
                ) )}
            </TabbarComponent>
)

Tabbar.propTypes = {
    activePanel:PropTypes.string,
    changePanels: PropTypes.func,
};
