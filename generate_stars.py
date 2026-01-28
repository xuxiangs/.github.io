import random

def get_shadows(n):
    shadows = []
    for _ in range(n):
        x = random.randint(1, 2000)
        y = random.randint(1, 2000)
        shadows.append(f"{x}px {y}px #FFF")
    return ", ".join(shadows)

print("/* .stars */")
print(get_shadows(200))
print("\n/* .stars2 */")
print(get_shadows(100))
print("\n/* .stars3 */")
print(get_shadows(50))
