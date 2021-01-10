"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class CoordinatorInterfaceFactory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.CoordinatorInterfaceFactory = CoordinatorInterfaceFactory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "_requestId",
                type: "bytes32"
            },
            {
                name: "_aggregatorArgs",
                type: "bytes32"
            }
        ],
        name: "fulfillOracleRequest",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_serviceAgreementData",
                type: "bytes"
            },
            {
                name: "_oracleSignaturesData",
                type: "bytes"
            }
        ],
        name: "initiateServiceAgreement",
        outputs: [
            {
                name: "",
                type: "bytes32"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29vcmRpbmF0b3JJbnRlcmZhY2VGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29vcmRpbmF0b3JJbnRlcmZhY2VGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsb0JBQW9COztBQUVwQixtQ0FBMEM7QUFLMUMsTUFBYSwyQkFBMkI7SUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFlLEVBQ2YsZ0JBQW1DO1FBRW5DLE9BQU8sSUFBSSxpQkFBUSxDQUNqQixPQUFPLEVBQ1AsSUFBSSxFQUNKLGdCQUFnQixDQUNPLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBWEQsa0VBV0M7QUFFRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUU7WUFDTjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLHNCQUFzQjtRQUM1QixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsdUJBQXVCO2dCQUM3QixJQUFJLEVBQUUsT0FBTzthQUNkO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsMEJBQTBCO1FBQ2hDLE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYXRlZCBieSB0cy1nZW5lcmF0b3IgdmVyLiAwLjAuOCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQ29udHJhY3QsIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcblxuaW1wb3J0IHsgQ29vcmRpbmF0b3JJbnRlcmZhY2UgfSBmcm9tIFwiLi9Db29yZGluYXRvckludGVyZmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0b3JJbnRlcmZhY2VGYWN0b3J5IHtcbiAgc3RhdGljIGNvbm5lY3QoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25lck9yUHJvdmlkZXI6IFNpZ25lciB8IFByb3ZpZGVyXG4gICk6IENvb3JkaW5hdG9ySW50ZXJmYWNlIHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KFxuICAgICAgYWRkcmVzcyxcbiAgICAgIF9hYmksXG4gICAgICBzaWduZXJPclByb3ZpZGVyXG4gICAgKSBhcyBDb29yZGluYXRvckludGVyZmFjZTtcbiAgfVxufVxuXG5jb25zdCBfYWJpID0gW1xuICB7XG4gICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIl9yZXF1ZXN0SWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiX2FnZ3JlZ2F0b3JBcmdzXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImZ1bGZpbGxPcmFjbGVSZXF1ZXN0XCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJvb2xcIlxuICAgICAgfVxuICAgIF0sXG4gICAgcGF5YWJsZTogZmFsc2UsXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJfc2VydmljZUFncmVlbWVudERhdGFcIixcbiAgICAgICAgdHlwZTogXCJieXRlc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIl9vcmFjbGVTaWduYXR1cmVzRGF0YVwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiaW5pdGlhdGVTZXJ2aWNlQWdyZWVtZW50XCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgcGF5YWJsZTogZmFsc2UsXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfVxuXTtcbiJdfQ==