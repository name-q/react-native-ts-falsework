import React, { useEffect, useState } from 'react';
import { msg } from '@/utils/index'

// 挂载共通模块
function MountCommonModule() {

    // app:tip
    const [tipVisible, setTipVisible] = useState(false)
    const [tipTextIcon, setTipTextIcon] = useState({ text: '', icon: '' })
    const showAppTip = ({ text, icon }) => {
        console.log('success', text, icon)
        setTipVisible(true)
        setTipTextIcon({ text, icon })
    }
    const hiddenAppTip = () => {
        setTipVisible(true)
        setTipTextIcon({ text: '', icon: '' })
    }

    useEffect(() => {
        // 挂载msg监听
        msg.on('app:tip', showAppTip);
        return () => {
            // 卸载msg监听 
            msg.off('app:tip', showAppTip);
        }
    }, [])

    return (
        <>

        </>
    );
}

export default MountCommonModule