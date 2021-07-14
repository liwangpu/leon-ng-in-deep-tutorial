var outsidePanelIsShow = false;
var outsideNgPanel, panelMaskPanel;

window.onload = function () {
    outsideNgPanel = document.getElementById('outsideNgPanel');
    panelMaskPanel = document.getElementById('panelMaskPanel');
    panelMaskPanel.addEventListener('click', toggleOutsidePanel);

    document.getElementById('btnCheckNgComponent').addEventListener('click', funCheckNgComponent);
    document.getElementById('btnTriggerMarkForCheck').addEventListener('click', funTriggerMarkForCheck);
    document.getElementById('btnTriggerAppTick').addEventListener('click', funTriggerAppTick);
    document.getElementById('btnClose').addEventListener('click', toggleOutsidePanel);

}

function funCheckNgComponent() {
    var ngCpt = window.getNgComponent();
    console.log('Ng组件', ngCpt);
}

function funTriggerMarkForCheck() {
    var ngCpt = window.getNgComponent();
    ngCpt.doMarkForCheck();
}

function funTriggerAppTick(){
    var ngCpt = window.getNgComponent();
    ngCpt.doAppTick();
}

function toggleOutsidePanel() {
    outsidePanelIsShow = !outsidePanelIsShow;
    if (outsidePanelIsShow) {
        outsideNgPanel.classList.add('show');
        panelMaskPanel.classList.add('show');
    } else {
        outsideNgPanel.classList.remove('show');
        panelMaskPanel.classList.remove('show');
    }
}

