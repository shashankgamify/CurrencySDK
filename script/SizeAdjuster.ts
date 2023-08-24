const { ccclass } = cc._decorator;

@ccclass
// @executeInEditMode
export default class SizeAdjuster extends cc.Component {

    start() {
        window.onresize = () => {
            console.log('resized');
            this.updateSize();
        }

        this.updateSize();
    }

    updateSize() {
        const frameSize = cc.view.getFrameSize();
        const size = cc.view.getCanvasSize();
        let max_height = (frameSize.height / frameSize.width) * cc.winSize.width;

        this.node.width = cc.winSize.width;
        this.node.height = max_height > size.height ? max_height : size.height;
    }
}