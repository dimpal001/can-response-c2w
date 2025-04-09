
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AnchorTextScalarFieldEnum = {
  id: 'id',
  categoryId: 'categoryId',
  data: 'data',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AnnouncementsScalarFieldEnum = {
  id: 'id',
  text: 'text'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  action: 'action',
  description: 'description',
  createdAt: 'createdAt'
};

exports.Prisma.BestSellingScalarFieldEnum = {
  id: 'id',
  title: 'title',
  hyperLink: 'hyperLink',
  price: 'price'
};

exports.Prisma.CallRequestScalarFieldEnum = {
  id: 'id',
  mobileNumber: 'mobileNumber',
  orderId: 'orderId',
  isRead: 'isRead',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CartItemScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  quantity: 'quantity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  colorId: 'colorId',
  sizeId: 'sizeId',
  imageId: 'imageId'
};

exports.Prisma.ContactUsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  message: 'message',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CustomerTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  productId: 'productId'
};

exports.Prisma.DeleteRequestScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  userName: 'userName',
  userEmail: 'userEmail',
  reason: 'reason',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.DiscountScalarFieldEnum = {
  id: 'id',
  code: 'code',
  description: 'description',
  amount: 'amount',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  productId: 'productId',
  maxPrice: 'maxPrice',
  minPrice: 'minPrice',
  isActive: 'isActive',
  isSpecial: 'isSpecial',
  orders: 'orders',
  userEmails: 'userEmails',
  isWebAvailable: 'isWebAvailable',
  isCODAvailable: 'isCODAvailable'
};

exports.Prisma.DropMessageScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  startedAt: 'startedAt',
  endedAt: 'endedAt',
  createdAt: 'createdAt'
};

exports.Prisma.ExclusiveCollectionScalarFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  categoryHyperLink: 'categoryHyperLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  mrp: 'mrp',
  price: 'price'
};

exports.Prisma.HeroSlidersScalarFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  categoryHyperLink: 'categoryHyperLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ImageWeekScalarFieldEnum = {
  id: 'id',
  hyperLink: 'hyperLink',
  imageUrl: 'imageUrl'
};

exports.Prisma.LogosScalarFieldEnum = {
  id: 'id',
  logoUrl: 'logoUrl',
  isActive: 'isActive',
  altText: 'altText'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  senderId: 'senderId',
  receiverId: 'receiverId',
  message: 'message',
  createdAt: 'createdAt',
  handledById: 'handledById'
};

exports.Prisma.NewArrivalsScalarFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  description: 'description',
  mrp: 'mrp',
  price: 'price',
  title: 'title'
};

exports.Prisma.NewsletterScalarFieldEnum = {
  id: 'id',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  message: 'message',
  isRead: 'isRead',
  createdAt: 'createdAt',
  hyperLink: 'hyperLink',
  title: 'title'
};

exports.Prisma.OrderDetailsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  totalPrice: 'totalPrice',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  discountId: 'discountId',
  orderId: 'orderId',
  paymentMethod: 'paymentMethod',
  notes: 'notes',
  trackingId: 'trackingId',
  addressId: 'addressId',
  finalPrice: 'finalPrice'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  productId: 'productId',
  quantity: 'quantity',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  sizeId: 'sizeId',
  colorId: 'colorId',
  imageId: 'imageId',
  isReviewed: 'isReviewed'
};

exports.Prisma.OtpScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  code: 'code',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.PaymentDetailsScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  amount: 'amount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  bank: 'bank',
  currency: 'currency',
  method: 'method',
  order_id: 'order_id',
  payment_id: 'payment_id',
  upi: 'upi',
  wallet: 'wallet'
};

exports.Prisma.PrivilegeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  label: 'label'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  isReturnable: 'isReturnable',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  thumbnailUrl: 'thumbnailUrl',
  isActive: 'isActive',
  description: 'description',
  summary: 'summary',
  customerTypeId: 'customerTypeId',
  userId: 'userId',
  estimatedDeliveryDay: 'estimatedDeliveryDay',
  styleId: 'styleId',
  title: 'title',
  returnPolicy: 'returnPolicy',
  views: 'views',
  displayPrice: 'displayPrice',
  tags: 'tags',
  longTailKeyword: 'longTailKeyword',
  affiliateId: 'affiliateId',
  isCODAvailable: 'isCODAvailable',
  ogImage: 'ogImage',
  sellerCode: 'sellerCode',
  sizeChartId: 'sizeChartId',
  fabricId: 'fabricId',
  seoTitle: 'seoTitle',
  seoDescription: 'seoDescription'
};

exports.Prisma.ProductCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  isVisible: 'isVisible',
  seoTitle: 'seoTitle',
  seoDescription: 'seoDescription'
};

exports.Prisma.ProductColorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  slug: 'slug'
};

exports.Prisma.ProductFabricScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug'
};

exports.Prisma.ProductImageScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  imageUrl: 'imageUrl',
  colorId: 'colorId',
  altText: 'altText',
  caption: 'caption'
};

exports.Prisma.ProductInventoryScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  mrp: 'mrp',
  price: 'price',
  sizeId: 'sizeId',
  stock: 'stock',
  minQuantity: 'minQuantity',
  discount: 'discount'
};

exports.Prisma.ProductReviewScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  rating: 'rating',
  review: 'review',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  images: 'images'
};

exports.Prisma.ProductSizeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug'
};

exports.Prisma.ProductWeekScalarFieldEnum = {
  id: 'id',
  title: 'title',
  hyperLink: 'hyperLink',
  imageUrl: 'imageUrl'
};

exports.Prisma.QuotesScalarFieldEnum = {
  id: 'id',
  text: 'text',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  categoryId: 'categoryId'
};

exports.Prisma.ReturnRequestScalarFieldEnum = {
  id: 'id',
  orderItemId: 'orderItemId',
  reason: 'reason',
  status: 'status',
  requestedAt: 'requestedAt',
  resolvedAt: 'resolvedAt'
};

exports.Prisma.RewardsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  code: 'code',
  description: 'description'
};

exports.Prisma.SearchQueryScalarFieldEnum = {
  id: 'id',
  query: 'query',
  createdAt: 'createdAt',
  userId: 'userId'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  expiresAt: 'expiresAt'
};

exports.Prisma.ShopByOccasionScalarFieldEnum = {
  id: 'id',
  occasionName: 'occasionName',
  categoryHyperLinks: 'categoryHyperLinks',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShopByOccasionProductScalarFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  shopByOccasionId: 'shopByOccasionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShopBySeasonScalarFieldEnum = {
  id: 'id',
  videoUrl: 'videoUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShopBySeasonProductScalarFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  seasonId: 'seasonId',
  hyperLink: 'hyperLink'
};

exports.Prisma.ShowcasesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  categoryHyperLink: 'categoryHyperLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SizeChartScalarFieldEnum = {
  id: 'id',
  title: 'title',
  imageUrl: 'imageUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  productId: 'productId'
};

exports.Prisma.SocialLinksScalarFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink'
};

exports.Prisma.StaticMessagesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  status: 'status',
  message: 'message',
  createdAt: 'createdAt'
};

exports.Prisma.SubCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  categoryId: 'categoryId',
  imageUrl: 'imageUrl',
  seoTitle: 'seoTitle',
  seoDescription: 'seoDescription'
};

exports.Prisma.SupportTicketScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subject: 'subject',
  message: 'message',
  status: 'status',
  createdAt: 'createdAt',
  resolvedAt: 'resolvedAt'
};

exports.Prisma.TagsScalarFieldEnum = {
  id: 'id',
  tag: 'tag'
};

exports.Prisma.TrendingScalarFieldEnum = {
  id: 'id',
  videoUrl: 'videoUrl',
  title: 'title',
  price: 'price',
  hyperLink: 'hyperLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  avatarUrl: 'avatarUrl'
};

exports.Prisma.UpdateHistoryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  description: 'description',
  createdAt: 'createdAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isVerified: 'isVerified',
  role: 'role',
  firstName: 'firstName',
  lastName: 'lastName',
  status: 'status',
  profileUrl: 'profileUrl',
  mobileNumber: 'mobileNumber',
  whatsAppNumber: 'whatsAppNumber',
  isLoggedIn: 'isLoggedIn',
  isViewed: 'isViewed',
  is2FA: 'is2FA',
  assignedStaffId: 'assignedStaffId'
};

exports.Prisma.UserAddressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  addressLine1: 'addressLine1',
  addressLine2: 'addressLine2',
  city: 'city',
  state: 'state',
  zipCode: 'zipCode',
  country: 'country',
  mobileNumber: 'mobileNumber',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDefault: 'isDefault',
  fullName: 'fullName',
  altMobileNumber: 'altMobileNumber'
};

exports.Prisma.UserPrivilegeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  privilegeId: 'privilegeId',
  createdAt: 'createdAt'
};

exports.Prisma.VidesScalarFieldEnum = {
  id: 'id',
  videoUrl: 'videoUrl',
  title: 'title',
  description: 'description',
  hyperLink: 'hyperLink',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  productId: 'productId'
};

exports.Prisma.VisitorScalarFieldEnum = {
  id: 'id',
  ipAddress: 'ipAddress',
  cookieId: 'cookieId',
  createdAt: 'createdAt'
};

exports.Prisma.WishlistItemScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.AnchorTextOrderByRelevanceFieldEnum = {
  id: 'id',
  categoryId: 'categoryId',
  data: 'data'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.AnnouncementsOrderByRelevanceFieldEnum = {
  id: 'id',
  text: 'text'
};

exports.Prisma.AuditLogOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  action: 'action',
  description: 'description'
};

exports.Prisma.BestSellingOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  hyperLink: 'hyperLink',
  price: 'price'
};

exports.Prisma.CallRequestOrderByRelevanceFieldEnum = {
  id: 'id',
  mobileNumber: 'mobileNumber',
  orderId: 'orderId'
};

exports.Prisma.CartItemOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  colorId: 'colorId',
  sizeId: 'sizeId',
  imageId: 'imageId'
};

exports.Prisma.ContactUsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  message: 'message'
};

exports.Prisma.CustomerTypeOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  productId: 'productId'
};

exports.Prisma.DeleteRequestOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  userName: 'userName',
  userEmail: 'userEmail',
  reason: 'reason'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.DiscountOrderByRelevanceFieldEnum = {
  id: 'id',
  code: 'code',
  description: 'description',
  productId: 'productId'
};

exports.Prisma.DropMessageOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId'
};

exports.Prisma.ExclusiveCollectionOrderByRelevanceFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  categoryHyperLink: 'categoryHyperLink'
};

exports.Prisma.HeroSlidersOrderByRelevanceFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  categoryHyperLink: 'categoryHyperLink'
};

exports.Prisma.ImageWeekOrderByRelevanceFieldEnum = {
  id: 'id',
  hyperLink: 'hyperLink',
  imageUrl: 'imageUrl'
};

exports.Prisma.LogosOrderByRelevanceFieldEnum = {
  id: 'id',
  logoUrl: 'logoUrl',
  altText: 'altText'
};

exports.Prisma.MessageOrderByRelevanceFieldEnum = {
  id: 'id',
  senderId: 'senderId',
  receiverId: 'receiverId',
  message: 'message',
  handledById: 'handledById'
};

exports.Prisma.NewArrivalsOrderByRelevanceFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  description: 'description',
  title: 'title'
};

exports.Prisma.NewsletterOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email'
};

exports.Prisma.NotificationOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  message: 'message',
  hyperLink: 'hyperLink',
  title: 'title'
};

exports.Prisma.OrderDetailsOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  discountId: 'discountId',
  orderId: 'orderId',
  notes: 'notes',
  trackingId: 'trackingId',
  addressId: 'addressId'
};

exports.Prisma.OrderItemOrderByRelevanceFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  productId: 'productId',
  sizeId: 'sizeId',
  colorId: 'colorId',
  imageId: 'imageId'
};

exports.Prisma.OtpOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  code: 'code'
};

exports.Prisma.PaymentDetailsOrderByRelevanceFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  bank: 'bank',
  currency: 'currency',
  method: 'method',
  order_id: 'order_id',
  payment_id: 'payment_id',
  upi: 'upi',
  wallet: 'wallet'
};

exports.Prisma.PrivilegeOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  label: 'label'
};

exports.Prisma.ProductOrderByRelevanceFieldEnum = {
  id: 'id',
  slug: 'slug',
  thumbnailUrl: 'thumbnailUrl',
  description: 'description',
  summary: 'summary',
  customerTypeId: 'customerTypeId',
  userId: 'userId',
  styleId: 'styleId',
  title: 'title',
  returnPolicy: 'returnPolicy',
  longTailKeyword: 'longTailKeyword',
  affiliateId: 'affiliateId',
  ogImage: 'ogImage',
  sellerCode: 'sellerCode',
  sizeChartId: 'sizeChartId',
  fabricId: 'fabricId',
  seoTitle: 'seoTitle',
  seoDescription: 'seoDescription'
};

exports.Prisma.ProductCategoryOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  seoTitle: 'seoTitle',
  seoDescription: 'seoDescription'
};

exports.Prisma.ProductColorOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  slug: 'slug'
};

exports.Prisma.ProductFabricOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug'
};

exports.Prisma.ProductImageOrderByRelevanceFieldEnum = {
  id: 'id',
  productId: 'productId',
  imageUrl: 'imageUrl',
  colorId: 'colorId',
  altText: 'altText',
  caption: 'caption'
};

exports.Prisma.ProductInventoryOrderByRelevanceFieldEnum = {
  id: 'id',
  productId: 'productId',
  sizeId: 'sizeId'
};

exports.Prisma.ProductReviewOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  review: 'review'
};

exports.Prisma.ProductSizeOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug'
};

exports.Prisma.ProductWeekOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  hyperLink: 'hyperLink',
  imageUrl: 'imageUrl'
};

exports.Prisma.QuotesOrderByRelevanceFieldEnum = {
  id: 'id',
  text: 'text',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  categoryId: 'categoryId'
};

exports.Prisma.ReturnRequestOrderByRelevanceFieldEnum = {
  id: 'id',
  orderItemId: 'orderItemId',
  reason: 'reason'
};

exports.Prisma.RewardsOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  code: 'code',
  description: 'description'
};

exports.Prisma.SearchQueryOrderByRelevanceFieldEnum = {
  id: 'id',
  query: 'query',
  userId: 'userId'
};

exports.Prisma.SessionOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token'
};

exports.Prisma.ShopByOccasionOrderByRelevanceFieldEnum = {
  id: 'id',
  occasionName: 'occasionName',
  categoryHyperLinks: 'categoryHyperLinks'
};

exports.Prisma.ShopByOccasionProductOrderByRelevanceFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  shopByOccasionId: 'shopByOccasionId'
};

exports.Prisma.ShopBySeasonOrderByRelevanceFieldEnum = {
  id: 'id',
  videoUrl: 'videoUrl'
};

exports.Prisma.ShopBySeasonProductOrderByRelevanceFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  description: 'description',
  seasonId: 'seasonId',
  hyperLink: 'hyperLink'
};

exports.Prisma.ShowcasesOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink',
  categoryHyperLink: 'categoryHyperLink'
};

exports.Prisma.SizeChartOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  imageUrl: 'imageUrl',
  productId: 'productId'
};

exports.Prisma.SocialLinksOrderByRelevanceFieldEnum = {
  id: 'id',
  imageUrl: 'imageUrl',
  hyperLink: 'hyperLink'
};

exports.Prisma.StaticMessagesOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  message: 'message'
};

exports.Prisma.SubCategoryOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  categoryId: 'categoryId',
  imageUrl: 'imageUrl',
  seoTitle: 'seoTitle',
  seoDescription: 'seoDescription'
};

exports.Prisma.SupportTicketOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  subject: 'subject',
  message: 'message'
};

exports.Prisma.TagsOrderByRelevanceFieldEnum = {
  id: 'id',
  tag: 'tag'
};

exports.Prisma.TrendingOrderByRelevanceFieldEnum = {
  id: 'id',
  videoUrl: 'videoUrl',
  title: 'title',
  price: 'price',
  hyperLink: 'hyperLink',
  avatarUrl: 'avatarUrl'
};

exports.Prisma.UpdateHistoryOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  description: 'description'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  profileUrl: 'profileUrl',
  mobileNumber: 'mobileNumber',
  whatsAppNumber: 'whatsAppNumber',
  assignedStaffId: 'assignedStaffId'
};

exports.Prisma.UserAddressOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  addressLine1: 'addressLine1',
  addressLine2: 'addressLine2',
  city: 'city',
  state: 'state',
  zipCode: 'zipCode',
  country: 'country',
  mobileNumber: 'mobileNumber',
  fullName: 'fullName',
  altMobileNumber: 'altMobileNumber'
};

exports.Prisma.UserPrivilegeOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  privilegeId: 'privilegeId'
};

exports.Prisma.VidesOrderByRelevanceFieldEnum = {
  id: 'id',
  videoUrl: 'videoUrl',
  title: 'title',
  description: 'description',
  hyperLink: 'hyperLink',
  productId: 'productId'
};

exports.Prisma.VisitorOrderByRelevanceFieldEnum = {
  id: 'id',
  ipAddress: 'ipAddress',
  cookieId: 'cookieId'
};

exports.Prisma.WishlistItemOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId'
};
exports.DeleteRequest_status = exports.$Enums.DeleteRequest_status = {
  REVIEW: 'REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

exports.Discount_type = exports.$Enums.Discount_type = {
  PERCENTAGE: 'PERCENTAGE',
  FIXED: 'FIXED'
};

exports.OrderDetails_status = exports.$Enums.OrderDetails_status = {
  INCOMPLETE: 'INCOMPLETE',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  SHIPPED: 'SHIPPED',
  INTRANSIT: 'INTRANSIT',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

exports.OrderDetails_paymentMethod = exports.$Enums.OrderDetails_paymentMethod = {
  COD: 'COD',
  ONLINE: 'ONLINE'
};

exports.ReturnRequest_status = exports.$Enums.ReturnRequest_status = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  REFUNDED: 'REFUNDED'
};

exports.StaticMessages_status = exports.$Enums.StaticMessages_status = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

exports.SupportTicket_status = exports.$Enums.SupportTicket_status = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

exports.User_role = exports.$Enums.User_role = {
  ADMIN: 'ADMIN',
  SELLER: 'SELLER',
  BUYER: 'BUYER',
  STAFF: 'STAFF'
};

exports.User_status = exports.$Enums.User_status = {
  ACTIVE: 'ACTIVE',
  DEACTIVE: 'DEACTIVE',
  BANNED: 'BANNED'
};

exports.Prisma.ModelName = {
  AnchorText: 'AnchorText',
  Announcements: 'Announcements',
  AuditLog: 'AuditLog',
  BestSelling: 'BestSelling',
  CallRequest: 'CallRequest',
  CartItem: 'CartItem',
  ContactUs: 'ContactUs',
  CustomerType: 'CustomerType',
  DeleteRequest: 'DeleteRequest',
  Discount: 'Discount',
  DropMessage: 'DropMessage',
  ExclusiveCollection: 'ExclusiveCollection',
  HeroSliders: 'HeroSliders',
  ImageWeek: 'ImageWeek',
  Logos: 'Logos',
  Message: 'Message',
  NewArrivals: 'NewArrivals',
  Newsletter: 'Newsletter',
  Notification: 'Notification',
  OrderDetails: 'OrderDetails',
  OrderItem: 'OrderItem',
  Otp: 'Otp',
  PaymentDetails: 'PaymentDetails',
  Privilege: 'Privilege',
  Product: 'Product',
  ProductCategory: 'ProductCategory',
  ProductColor: 'ProductColor',
  ProductFabric: 'ProductFabric',
  ProductImage: 'ProductImage',
  ProductInventory: 'ProductInventory',
  ProductReview: 'ProductReview',
  ProductSize: 'ProductSize',
  ProductWeek: 'ProductWeek',
  Quotes: 'Quotes',
  ReturnRequest: 'ReturnRequest',
  Rewards: 'Rewards',
  SearchQuery: 'SearchQuery',
  Session: 'Session',
  ShopByOccasion: 'ShopByOccasion',
  ShopByOccasionProduct: 'ShopByOccasionProduct',
  ShopBySeason: 'ShopBySeason',
  ShopBySeasonProduct: 'ShopBySeasonProduct',
  Showcases: 'Showcases',
  SizeChart: 'SizeChart',
  SocialLinks: 'SocialLinks',
  StaticMessages: 'StaticMessages',
  SubCategory: 'SubCategory',
  SupportTicket: 'SupportTicket',
  Tags: 'Tags',
  Trending: 'Trending',
  UpdateHistory: 'UpdateHistory',
  User: 'User',
  UserAddress: 'UserAddress',
  UserPrivilege: 'UserPrivilege',
  Vides: 'Vides',
  Visitor: 'Visitor',
  WishlistItem: 'WishlistItem'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
