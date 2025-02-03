class CustomerService{
    constructor(customerRepository){
        this.customerRepository = customerRepository;
    }

    async getAllCustomers(){
        return await this.customerRepository.getAll();
    } 

    async getCustomerById(id){
        return await this.customerRepository.findOne({CUS_ID: id});
    }
  
    async createCustomer(customer){
        return await this.customerRepository.create(customer);
    }

    async updateCustomer(id, customerData){
        return await this.customerRepository.update({CUS_ID: id}, customerData);
    }

    async deleteCustomer(id){
        return await this.customerRepository.remove({CUS_ID: id});
    }
}

CustomerService._dependencies = ['customerRepository']

module.exports = CustomerService;