How does TypeScript enforce type safety in this object-oriented program?

TypeScript enforces type safety in object-oriented programs by checking that class properties and methods use the correct types, validating that method arguments and return values match their declared types, and detecting type errors at compile time to prevent runtime bugs. It ensures that objects conform to defined interfaces or type definitions and maintains safe inheritance and polymorphism, so subclasses can be used wherever parent types are expected without causing type-related errors.

How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

Inheritance reduces code duplication for PhysicalProduct and DigitalProduct by allowing them to share common properties and methods defined once in a base Product class. Instead of each subclass redefining sku, name, price, or methods like displayDetails(), they inherit these from Product and only implement their unique features, such as weight for PhysicalProduct or fileSize for DigitalProduct. This makes the code shorter, easier to maintain, and avoids repeating the same logic in multiple places.


What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

Encapsulation hides the internal details of a class, exposing only what’s necessary through controlled methods. By using private or protected access modifiers, you prevent external code from directly modifying sensitive properties like price or id, which reduces the risk of accidental errors or inconsistent states. Public members allow safe access where needed, while protected members let subclasses use or extend functionality without exposing it to the outside world. Overall, this improves data integrity, maintainability, and modularity, because changes to internal implementation don’t break external code that relies on the class.

If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

Polymorphism makes adding a new product type like SubscriptionProduct easy because it allows all products to be treated as instances of the common Product class. The new subclass can inherit shared properties and methods while customizing its own behavior, and existing code that works with Product—such as calculating prices or applying discounts—can handle the new product without any changes. This makes the system scalable, flexible, and easy to extend.