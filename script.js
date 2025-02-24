// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = mobileMenuButton.querySelector('i');

mobileMenuButton.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden');
  menuIcon.setAttribute('data-lucide', isOpen ? 'menu' : 'x');
  lucide.createIcons();
});

// Typewriter effect
class Typewriter {
  constructor(element, texts, delay = 100) {
    this.element = element;
    this.texts = texts;
    this.delay = delay;
    this.currentTextIndex = 0;
    this.currentText = '';
    this.isDeleting = false;
    
    this.type();
  }
  
  type() {
    const currentFullText = this.texts[this.currentTextIndex];
    
    if (this.isDeleting) {
      this.currentText = currentFullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentFullText.substring(0, this.currentText.length + 1);
    }
    
    this.element.textContent = this.currentText;
    
    let typeSpeed = this.delay;
    
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    
    if (!this.isDeleting && this.currentText === currentFullText) {
      typeSpeed = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      typeSpeed = 500; // Pause before typing next
    }
    
    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize typewriter
new Typewriter(
  document.querySelector('.typewriter'),
  [
    'Track Your Social Success',
    'Analyze Your Growth',
    'Optimize Your Reach',
  ],
  100
);


    // // Create Scene
    // let scene = new THREE.Scene();
    // let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Ensures transparent background
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(0x000000, 0); // Fully transparent
    // document.body.appendChild(renderer.domElement);

    // // Lighting
    // let light = new THREE.AmbientLight(0xffffff, 0.6);
    // scene.add(light);
    // let directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    // directionalLight.position.set(5, 5, 5);
    // scene.add(directionalLight);

    // // Create Cubes
    // let cubes = [];
    // let geometry = new THREE.BoxGeometry(1, 1, 1);
    // let materials = [
    //     new THREE.MeshStandardMaterial({ color: 0xBBDEFB, roughness: 0.3, metalness: 0.5 }),
    //     new THREE.MeshStandardMaterial({ color: 0x64B5F6, roughness: 0.2, metalness: 0.7 }),
    //     new THREE.MeshStandardMaterial({ color: 0x1E88E5, roughness: 0.1, metalness: 0.9 })
    // ];
    // for (let i = 0; i < 20; i++) {
    //     let material = materials[Math.floor(Math.random() * materials.length)];
    //     let cube = new THREE.Mesh(geometry, material);
    //     cube.position.set(Math.random() * 10 - 5, Math.random() * 6 - 3, Math.random() * -10);
    //     cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    //     scene.add(cube);
    //     cubes.push(cube);
    // }

    // // Camera position
    // camera.position.z = 5;

    // // Animation Loop
    // function animate() {
    //     requestAnimationFrame(animate);
    //     cubes.forEach(cube => {
    //         cube.rotation.x += 0.005;
    //         cube.rotation.y += 0.005;
    //         cube.position.z += 0.01;
    //         if (cube.position.z > 2) cube.position.z = -10;
    //     });
    //     renderer.render(scene, camera);
    // }
    // animate();

    // // Responsive Resizing
    // window.addEventListener("resize", () => {
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    // });

