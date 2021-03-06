/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import BulkExports = require('../BulkExports');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { DayList } from './export/day';
import { DayListInstance } from './export/day';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the ExportList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function ExportList(version: BulkExports): ExportListInstance;

interface ExportListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ExportContext;
  /**
   * Constructs a export
   *
   * @param resourceType - The resource_type
   */
  get(resourceType: string): ExportContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface ExportPayload extends ExportResource, Page.TwilioResponsePayload {
}

interface ExportResource {
  links: string;
  resource_type: string;
  url: string;
}

interface ExportSolution {
}


declare class ExportContext {
  /**
   * Initialize the ExportContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property days - days resource
   *
   * @param version - Version of the resource
   * @param resourceType - The resource_type
   */
  constructor(version: BulkExports, resourceType: string);

  days: DayListInstance;
  /**
   * fetch a ExportInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExportInstance) => any): Promise<ExportInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class ExportInstance extends SerializableClass {
  /**
   * Initialize the ExportContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property resourceType - The resource_type
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param resourceType - The resource_type
   */
  constructor(version: BulkExports, payload: ExportPayload, resourceType: string);

  private _proxy: ExportContext;
  /**
   * Access the days
   */
  days(): DayListInstance;
  /**
   * fetch a ExportInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExportInstance) => any): void;
  links: string;
  resourceType: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class ExportPage extends Page<BulkExports, ExportPayload, ExportResource, ExportInstance> {
  /**
   * Initialize the ExportPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: BulkExports, response: Response<string>, solution: ExportSolution);

  /**
   * Build an instance of ExportInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ExportPayload): ExportInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ExportContext, ExportInstance, ExportList, ExportListInstance, ExportPage, ExportPayload, ExportResource, ExportSolution }
