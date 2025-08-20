document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const lookPromptInput = document.getElementById('look-prompt');
    const generateLookBtn = document.getElementById('generate-look');
    const lookItemsContainer = document.querySelector('.look-items');
    const wardrobeItemsContainer = document.querySelector('.wardrobe-items');
    const modelImage = document.getElementById('model-image');
    
    // Dados de exemplo (em uma aplicação real, isso viria de uma API)
    const sampleWardrobeItems = [
        {
            id: 1,
            name: 'Blusa Preta Básica',
            store: 'Shein',
            category: 'top',
            color: 'black',
            price: 'R$ 22,50',
            image: 'maria.png',
            link: 'https://br.shein.com/Basic-Ribana-Ribbed-Premium-Blouse-T-Shirt-Gringa-Fashion-p-83967365.html?src_identifier=st%3D4%60sc%3DBlusa%20Preta%20Basica%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1755729520100&pageListType=4&imgRatio=3-4&pageListType=4'
        },
        {
            id: 2,
            name: 'Calça Jeans Skinny',
            store: 'Shein',
            category: 'bottom',
            color: 'black',
            price: 'R$ 129,90',
            image: 'Captura de tela_2025-08-20_19-45-15.png',
            link: 'https://br.shein.com/Women-Jeans-p-30186145.html?src_identifier=st%3D2%60sc%3DCal%C3%A7a%20Jeans%20Skinny%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1755729534741&pageListType=4&imgRatio=3-4&pageListType=4'
        },
        {
            id: 3,
            name: 'Vestido Vinho Elegante',
            store: 'Shein',
            category: 'dress',
            color: 'red',
            price: 'R$ 159,90',
            image: 'Captura de tela_2025-08-20_19-49-48.png',
            link: 'https://br.shein.com/SHEIN-Belle-Burgundy-Red-Front-Collar-Criss-Cross-Backless-Wrap-Body-With-Lower-Straps-And-Leg-Revealing-Satin-Ball-Elegant-Bridesmaid-Dress-p-9942617.html?src_identifier=st%3D2%60sc%3DVestido%20Vinho%20Elegante%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1755729801302&pageListType=4&imgRatio=3-4&pageListType=4'
        },
        {
            id: 4,
            name: 'Tênis Branco',
            store: 'Nike',
            category: 'shoes',
            color: 'white',
            price: 'R$ 398,99',
            image: 'assets/images/sneakers.jpg',
            link: 'https://www.nike.com.br/tenis-nike-court-vision-alta-feminino-014404.html?cor=51'
        },
        {
            id: 5,
            name: 'Bolsa Preta',
            store: 'Zara',
            category: 'accessories',
            color: 'black',
            price: 'R$ 229,90',
            image: 'assets/images/bag.jpg',
            link: 'https://www.zara.com/bag'
        },
        {
            id: 6,
            name: 'Blusa Branca',
            store: 'Shein',
            category: 'top',
            color: 'white',
            price: 'R$ 49,90',
            image: 'assets/images/white-top.jpg',
            link: 'https://www.shein.com/white-top'
        }
    ];
    
    // Gerar looks aleatórios (simulação de IA)
    const sampleLooks = [
        {
            name: 'Look Casual Preto',
            items: [1, 2, 4, 5],
            model: 'assets/images/model-black.jpg'
        },
        {
            name: 'Look Elegante Vinho',
            items: [3, 4, 5],
            model: 'assets/images/model-dress.jpg'
        },
        {
            name: 'Look Básico Branco',
            items: [6, 2, 4],
            model: 'assets/images/model-white.jpg'
        }
    ];
    
    // Carregar itens do guarda-roupa
    function loadWardrobeItems() {
        wardrobeItemsContainer.innerHTML = '';
        
        sampleWardrobeItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'wardrobe-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="wardrobe-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.store} • ${item.price}</p>
                </div>
                <div class="wardrobe-item-actions">
                    <button title="Adicionar a look"><i class="fas fa-plus"></i></button>
                    <button title="Remover"><i class="fas fa-trash"></i></button>
                </div>
            `;
            
            wardrobeItemsContainer.appendChild(itemElement);
        });
    }
    
    // Gerar um look baseado no prompt
    function generateLook() {
        const prompt = lookPromptInput.value.toLowerCase();
        
        // Simulação de processamento de IA
        let generatedLook;
        
        if (prompt.includes('preto') || prompt.includes('preta')) {
            generatedLook = sampleLooks[0];
        } else if (prompt.includes('vinho') || prompt.includes('vermelho')) {
            generatedLook = sampleLooks[1];
        } else if (prompt.includes('branco') || prompt.includes('branca')) {
            generatedLook = sampleLooks[2];
        } else {
            // Look aleatório se não encontrar palavras-chave
            generatedLook = sampleLooks[Math.floor(Math.random() * sampleLooks.length)];
        }
        
        // Exibir o look gerado
        displayGeneratedLook(generatedLook);
    }
    
    // Exibir o look gerado
    function displayGeneratedLook(look) {
        lookItemsContainer.innerHTML = '';
        modelImage.src = look.model;
        
        look.items.forEach(itemId => {
            const item = sampleWardrobeItems.find(i => i.id === itemId);
            if (item) {
                const itemElement = document.createElement('div');
                itemElement.className = 'look-item';
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                    <a href="${item.link}" target="_blank" class="btn-link">Ver na loja</a>
                `;
                lookItemsContainer.appendChild(itemElement);
            }
        });
        
        // Rolar até a seção do look gerado
        document.querySelector('.generated-look').scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    // Event Listeners
    generateLookBtn.addEventListener('click', generateLook);
    
    lookPromptInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateLook();
        }
    });
    
    // Filtros do guarda-roupa
    document.getElementById('category-filter').addEventListener('change', filterWardrobe);
    document.getElementById('color-filter').addEventListener('change', filterWardrobe);
    document.getElementById('store-filter').addEventListener('change', filterWardrobe);
    
    function filterWardrobe() {
        const category = document.getElementById('category-filter').value;
        const color = document.getElementById('color-filter').value;
        const store = document.getElementById('store-filter').value;
        
        // Em uma aplicação real, isso seria uma chamada à API com os filtros
        console.log(`Filtrando por: Categoria=${category}, Cor=${color}, Loja=${store}`);
        // Por simplicidade, estamos apenas recarregando todos os itens
        loadWardrobeItems();
    }
    
    // Inicialização
    loadWardrobeItems();
    
    // Simular integração com lojas
    document.querySelectorAll('.store-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const storeName = this.textContent.trim();
            alert(`Integração com ${storeName} será implementada aqui. Em uma aplicação real, isso abriria um popup de autenticação ou permitiria buscar itens diretamente da loja.`);
        });
    });
});
