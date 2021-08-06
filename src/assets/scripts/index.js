var outsidePanelIsShow = false;
var outsideNgPanel, panelMaskPanel;

window.onload = function () {
    outsideNgPanel = document.getElementById('outsideNgPanel');
    panelMaskPanel = document.getElementById('panelMaskPanel');
    panelMaskPanel.addEventListener('click', toggleOutsidePanel);

    document.getElementById('btnCheckNgComponent').addEventListener('click', funCheckNgComponent);
    document.getElementById('btnTriggerMarkForCheck').addEventListener('click', funTriggerMarkForCheck);
    document.getElementById('btnTriggerDetectChanges').addEventListener('click', funTriggerDetectChanges);
    document.getElementById('btnTriggerAppTick').addEventListener('click', funTriggerAppTick);
    document.getElementById('btnManualSetNgComponentUpdateTime').addEventListener('click', funManualSetNgComponentUpdateTime);
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

function funTriggerDetectChanges() {
    var ngCpt = window.getNgComponent();
    console.log(1,ngCpt);
    ngCpt.doDetectChanges();
}

function funTriggerAppTick() {
    var ngCpt = window.getNgComponent();
    ngCpt.doAppTick();
}

function funManualSetNgComponentUpdateTime() {
    var ngCpt = window.getNgComponent();
    ngCpt.updateTime = new Date().toISOString()
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

