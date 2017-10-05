import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    //TO DO: set the boolean value to true/false based on availability of check-in programs
    this.hideCheckInsTab(false);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  //if check-ins are not available, hide the tab
  hideTab(tab: TabComponent, hide: boolean) {
    tab.active = !hide;
    tab.hidden = hide;
  }

  hideCheckInsTab(hide: boolean) {
    let checkinsTab = this.tabs.filter(tab => tab.title == 'Check-Ins');
    if (checkinsTab.length > 0) {
      this.hideTab(checkinsTab[0], hide);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}