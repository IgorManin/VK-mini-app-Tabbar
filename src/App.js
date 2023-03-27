import React, { useState} from 'react';
import {
	AdaptivityProvider,
	AppRoot,
	SplitLayout, View, Epic, Placeholder,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Tabbar, Panel} from "./components";
import {AvailablePanel, NEWS_PANEL, TitlePanel } from "./constants";
import {Icon56NewsfeedOutline} from "@vkontakte/icons";
import styled from "@emotion/styled";

const Content = styled(Placeholder)`
  height: 85vh
`;

export const App = () => {
	const [activePanel, setActivePanel] = useState(NEWS_PANEL);

	const backToMainPanel = () => setActivePanel(NEWS_PANEL);
	const changePanels = (e) => setActivePanel(e.currentTarget.dataset.story);

	return (
			<AdaptivityProvider >
				<AppRoot>
					<SplitLayout>
						<Epic tabbar={<Tabbar changePanels={changePanels} activePanel={activePanel}/>}
							  activeStory={activePanel}>
							{AvailablePanel.map((panelId) => (
								<View key={panelId} id={panelId} activePanel={activePanel}>
									<Panel title={TitlePanel[panelId]} id={panelId} onClick={backToMainPanel}>
										<Content header={panelId} icon={<Icon56NewsfeedOutline width={56} height={56}/>}/>
									</Panel>
								</View>
							))}
						</Epic>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
	);
}


