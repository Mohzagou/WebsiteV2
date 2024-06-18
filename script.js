const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

if(bar)
{
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
})


class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Purchase:
    def __init__(self):
        self.products = []
    
    def add_product(self, product):
        self.products.append(product)
        
    def total(self):
        total = 0
        for product in self.products:
            total += product.price
        return total
        
apple = Product("Apple", 0.99)
orange = Product("Orange", 1.29)

purchase = Purchase()
purchase.add_product(apple)
purchase.add_product(orange)

print(purchase.total())
# Prints 2.28