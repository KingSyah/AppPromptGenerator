function generatePrompt() {
    const form = document.getElementById('promptForm');
    const formData = new FormData(form);
    
    // Collect all form values
    const data = {
        appName: document.getElementById('appName').value,
        appType: document.getElementById('appType').value,
        targetUsers: document.getElementById('targetUsers').value,
        mainProblem: document.getElementById('mainProblem').value,
        coreFeatures: document.getElementById('coreFeatures').value,
        techStack: document.getElementById('techStack').value,
        designStyle: document.getElementById('designStyle').value,
        userFlow: document.getElementById('userFlow').value,
        integrations: document.getElementById('integrations').value,
        performance: document.getElementById('performance').value,
        security: document.getElementById('security').value,
        additionalRequirements: document.getElementById('additionalRequirements').value,
        constraints: document.getElementById('constraints').value
    };
    
    // Generate Indonesian prompt
    const indonesianPrompt = generateIndonesianPrompt(data);
    document.getElementById('indonesianPrompt').textContent = indonesianPrompt;
    
    // Generate English prompt
    const englishPrompt = generateEnglishPrompt(data);
    document.getElementById('englishPrompt').textContent = englishPrompt;
}

function generateIndonesianPrompt(data) {
    let prompt = `PROMPT PENGEMBANGAN APLIKASI\n\n`;
    
    if (data.appName) {
        prompt += `📱 NAMA APLIKASI: ${data.appName}\n\n`;
    }
    
    if (data.appType) {
        prompt += `🔧 JENIS APLIKASI: ${data.appType.charAt(0).toUpperCase() + data.appType.slice(1)}\n\n`;
    }
    
    if (data.targetUsers) {
        prompt += `👥 TARGET PENGGUNA:\n${data.targetUsers}\n\n`;
    }
    
    if (data.mainProblem) {
        prompt += `🎯 MASALAH YANG DISELESAIKAN:\n${data.mainProblem}\n\n`;
    }
    
    if (data.coreFeatures) {
        prompt += `⚡ FITUR INTI:\n${data.coreFeatures.split(',').map(f => `• ${f.trim()}`).join('\n')}\n\n`;
    }
    
    if (data.techStack) {
        prompt += `💻 TECH STACK:\n${data.techStack}\n\n`;
    }
    
    if (data.designStyle) {
        prompt += `🎨 GAYA DESAIN: ${data.designStyle.replace('-', ' ').toUpperCase()}\n\n`;
    }
    
    if (data.userFlow) {
        prompt += `🔄 USER FLOW:\n${data.userFlow}\n\n`;
    }
    
    if (data.integrations) {
        prompt += `🔗 INTEGRASI:\n${data.integrations}\n\n`;
    }
    
    if (data.performance) {
        prompt += `⚡ KEBUTUHAN PERFORMA:\n${data.performance}\n\n`;
    }
    
    if (data.security) {
        prompt += `🔒 KEAMANAN:\n${data.security}\n\n`;
    }
    
    if (data.additionalRequirements) {
        prompt += `📋 PERSYARATAN TAMBAHAN:\n${data.additionalRequirements}\n\n`;
    }
    
    if (data.constraints) {
        prompt += `⚠️ BATASAN:\n${data.constraints}\n\n`;
    }
    
    prompt += `\n🚀 INSTRUKSI:\nBuatkan aplikasi lengkap dengan kode yang berfungsi, dokumentasi, dan panduan implementasi. Sertakan struktur folder, file konfigurasi, dan petunjuk deployment.`;
    
    return prompt;
}

function generateEnglishPrompt(data) {
    let prompt = `APPLICATION DEVELOPMENT PROMPT\n\n`;
    
    if (data.appName) {
        prompt += `📱 APPLICATION NAME: ${data.appName}\n\n`;
    }
    
    if (data.appType) {
        prompt += `🔧 APPLICATION TYPE: ${data.appType.charAt(0).toUpperCase() + data.appType.slice(1)}\n\n`;
    }
    
    if (data.targetUsers) {
        prompt += `👥 TARGET USERS:\n${data.targetUsers}\n\n`;
    }
    
    if (data.mainProblem) {
        prompt += `🎯 PROBLEM TO SOLVE:\n${data.mainProblem}\n\n`;
    }
    
    if (data.coreFeatures) {
        prompt += `⚡ CORE FEATURES:\n${data.coreFeatures.split(',').map(f => `• ${f.trim()}`).join('\n')}\n\n`;
    }
    
    if (data.techStack) {
        prompt += `💻 TECH STACK:\n${data.techStack}\n\n`;
    }
    
    if (data.designStyle) {
        prompt += `🎨 DESIGN STYLE: ${data.designStyle.replace('-', ' ').toUpperCase()}\n\n`;
    }
    
    if (data.userFlow) {
        prompt += `🔄 USER FLOW:\n${data.userFlow}\n\n`;
    }
    
    if (data.integrations) {
        prompt += `🔗 INTEGRATIONS:\n${data.integrations}\n\n`;
    }
    
    if (data.performance) {
        prompt += `⚡ PERFORMANCE REQUIREMENTS:\n${data.performance}\n\n`;
    }
    
    if (data.security) {
        prompt += `🔒 SECURITY REQUIREMENTS:\n${data.security}\n\n`;
    }
    
    if (data.additionalRequirements) {
        prompt += `📋 ADDITIONAL REQUIREMENTS:\n${data.additionalRequirements}\n\n`;
    }
    
    if (data.constraints) {
        prompt += `⚠️ CONSTRAINTS:\n${data.constraints}\n\n`;
    }
    
    prompt += `\n🚀 INSTRUCTIONS:\nCreate a complete, functional application with working code, documentation, and implementation guide. Include folder structure, configuration files, and deployment instructions.`;
    
    return prompt;
}

function resetForm() {
    document.getElementById('promptForm').reset();
    document.getElementById('indonesianPrompt').textContent = 'Prompt akan muncul di sini setelah Anda mengisi form dan klik "Generate Prompt"';
    document.getElementById('englishPrompt').textContent = 'English prompt will appear here after you fill the form and click "Generate Prompt"';
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    navigator.clipboard.writeText(text).then(function() {
        // Show temporary feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#48bb78';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#4299e1';
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#48bb78';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#4299e1';
        }, 2000);
    });
}

// Auto update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});